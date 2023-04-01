import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IAnswer, IHeadacheResult, IQuestion } from "src/interfaces/diagnosisPage";
import { useAppDispatch, useAppSelector } from "src/state";
import { resetAnswer, popAnswer } from "src/state/answerSlice";
import { SleepDisorderDiagnose, HeadacheDiagnose } from "src/api/diagnose";
import { IHeadacheQuestion, IPainArea } from "src/interfaces/headacheDiagnoseApi";
import { isHeadache, typeMapping, PAIN_AREA_MAP, insertType } from "src/utils/diagnosis";

const mockData = {
  most_likely: [
    {
      banner_illustration: "https://healthier.s3.ap-northeast-2.amazonaws.com/banner/sleepdisorder/62ce90a556e36933184b0fbf.png",
      record: {
        diagnosis_id: "62ce90a556e36933184b0fbf",
        is_created: "2023-01-13T20:59:45.055",
        severity: 2,
        title: "정신생리적 불면증",
      },
    },
    {
      banner_illustration: "https://healthier.s3.ap-northeast-2.amazonaws.com/banner/sleepdisorder/62ce900456e36933184b0fba.png",
      record: {
        diagnosis_id: "62ce908856e36933184b0fbd",
        is_created: "2023-01-13T20:59:45.055",
        severity: 0,
        title: "수면장애가 아니에요",
      },
    },
  ],
  suspicious: [
    {
      banner_illustration: "https://healthier.s3.ap-northeast-2.amazonaws.com/banner/headache/62e5281ee39eaf5b29f8adf1.png",
      record: {
        diagnosis_id: "62e5281ee39eaf5b29f8adf1",
        is_created: "2023-01-13T20:59:45.055",
        severity: 1,
        title: "경추성 두통",
      },
    },
    {
      banner_illustration: "https://healthier.s3.ap-northeast-2.amazonaws.com/banner/sleepdisorder/62ce90a556e36933184b0fbf.png",
      record: {
        diagnosis_id: "62ce90a556e36933184b0fbf",
        is_created: "2023-01-13T20:59:45.055",
        severity: 2,
        title: "정신생리적 불면증",
      },
    },
  ],
};

function useDiagnosis(state: string) {
  const navigate = useNavigate();

  const [curQuestion, setCurQuestion] = useState<IQuestion>({
    id: "",
    question: "",
    answers: [],
    is_multiple: 0,
  });
  const [selectedAnswer, setSelectedAnswer] = useState([] as IAnswer[]);
  const [loading, setLoading] = useState(false);
  const { gender, birth_year, interests, site } = useAppSelector((store) => store.user);
  const { answers } = useAppSelector((store) => store.answer);

  const prevQuestionList = useRef<IHeadacheQuestion[][]>([]); // 지나온 질문 묶음
  const curQuestionList = useRef<IHeadacheQuestion[]>([]); // 질문 묶음
  const curQuestionIndex = useRef<number>(0); // 질문 묶음에서 현재 질문 index
  const isPassPrimaryQuestion = useRef<boolean>(false); // 1차성 두통 질문을 거쳤는가
  const curSiteIndex = useRef<number>(0); // 다중 site 선택
  const curType = useRef<number>(0); // 일차성 두통 위한 case 값
  const results = useRef<IHeadacheResult[]>([]); // 진단 결과 id들

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!state) navigate("/");
    dispatch(resetAnswer());

    async function getFirstQuestion() {
      if (!isHeadache(state)) {
        const question = await SleepDisorderDiagnose.getFirstQuestion();

        setCurQuestion(question);
      } else {
        const { questions } = await HeadacheDiagnose.getBasicQuestion();

        const typedQuestion = insertType(questions, "basic");
        prevQuestionList.current.push(typedQuestion);
        curQuestionList.current = typedQuestion;
        curQuestionIndex.current = 0;
        setCurQuestion(typeMapping(curQuestionList.current[curQuestionIndex.current]));
        console.log(questions);
      }
    }

    getFirstQuestion();
  }, []);

  const setQuestion = (questions: IHeadacheQuestion[]) => {
    prevQuestionList.current.push(questions);
    curQuestionList.current = questions;
    curQuestionIndex.current = 0;
    setCurQuestion(typeMapping(curQuestionList.current[curQuestionIndex.current]));
    setSelectedAnswer([]);
  };

  const handleNext = async () => {
    if (isHeadache(state)) {
      console.log(curQuestion);
      if (++curQuestionIndex.current < curQuestionList.current.length) {
        setCurQuestion(typeMapping(curQuestionList.current[curQuestionIndex.current]));
        setSelectedAnswer([]);
      } else if (curQuestion.type === "basic") {
        const { questions } = await HeadacheDiagnose.getRedFlagSign();
        const typedQuestion = insertType(questions, "red_flag");
        setQuestion(typedQuestion);
        setSelectedAnswer([]);
      } else if (curQuestion.type === "red_flag") {
        if (prevQuestionList.current.length !== 2) return;
        console.log("red flag", {
          questions: [...answers, { question_id: curQuestion.id, answer_id: selectedAnswer.map((ans) => ans.answer_id) }],
          pain_area: site.map((s) => PAIN_AREA_MAP[s]),
        });
        const { type, questions } = await HeadacheDiagnose.postRedFlagSign({
          questions: [...answers, { question_id: curQuestion.id, answer_id: selectedAnswer.map((ans) => ans.answer_id) }],
          pain_area: site.map((s) => PAIN_AREA_MAP[s]),
        }); // 중복 답안 허용
        console.log("red_flag", questions);

        if (type === 1) {
          // red flag 진단 결과 저장
          // results.current.push(result);
        } else if (type === 2 || type === 3) {
          const typedQuestion = insertType(questions, "primary_question");
          setQuestion(typedQuestion);
          isPassPrimaryQuestion.current = true;
          curType.current = type;
        } else if (type === 4) {
          curSiteIndex.current++;
          const { questions: siteQuestions } = await HeadacheDiagnose.postFirstHeadacheQuestion({
            pain_area: PAIN_AREA_MAP[site[curSiteIndex.current]] as IPainArea,
          });

          setQuestion([{ ...siteQuestions[0], type: "site_first" }]);
        }
      } else if (curQuestion.type === "primary_question") {
        // 일차성 두통 마지막 질문
        const primaryQuestions = {
          type: curType.current,
          questions: [
            ...answers.slice(9).map((ans) => {
              return { question_id: ans.question_id, answer_id: ans.answer_id[0] };
            }),
            { question_id: curQuestion.id, answer_id: selectedAnswer[0].answer_id },
          ],
        };

        const { questions } = await HeadacheDiagnose.postPrimaryHeadache(primaryQuestions);
        const typedQuestion = insertType(questions, "primary_answer");
        console.log("primary_question", typedQuestion);
        setQuestion(typedQuestion);
      } else if (curQuestion.type === "primary_answer") {
        // 일차성 두통 응답
        const primaryAnswer = {
          question_id: curQuestion.id,
          answer_id: selectedAnswer[0].answer_id,
        };

        const { type, questions, result } = await HeadacheDiagnose.postNextPrimaryHeadache(primaryAnswer);
        console.log("primary_answer", questions);
        if (type === 2 && result) {
          results.current.push(result);

          if (curSiteIndex.current === site.length) {
            const { questions: additionalQuestion } = await HeadacheDiagnose.getAdditionalQuestion();
            const typedQuestion = insertType(additionalQuestion, "additional");

            setQuestion(typedQuestion);
          } else {
            curSiteIndex.current++;
            const { questions: siteQuestions } = await HeadacheDiagnose.postFirstHeadacheQuestion({
              pain_area: PAIN_AREA_MAP[site[curSiteIndex.current]] as IPainArea,
            });
            const typedQuestion = insertType(siteQuestions, "site_first");

            setQuestion(typedQuestion);
          }
        } else {
          const typedQuestion = insertType(questions, "primary_answer");
          setQuestion(typedQuestion);
        }
      } else if (curQuestion.type === "site_first" || curQuestion.type === "site") {
        const answer = {
          question_id: curQuestion.id,
          answer_id: selectedAnswer[0].answer_id,
        };

        const { type, questions, result } = await HeadacheDiagnose.postHeadacheQuestion(answer);
        console.log("site", questions);

        if (type === 1) {
          const typedQuestion = insertType(questions, "site");
          setQuestion(typedQuestion);
        } else if (type === 2) {
          if (!result) return;

          results.current.push(result);

          if (curSiteIndex.current === site.length) {
            const { questions: additionalQuestion } = await HeadacheDiagnose.getAdditionalQuestion();
            const typedQuestion = insertType(additionalQuestion, "additional");
            setQuestion(typedQuestion);
          } else {
            curSiteIndex.current++;
            const { questions: siteQuestions } = await HeadacheDiagnose.postFirstHeadacheQuestion({
              pain_area: PAIN_AREA_MAP[site[curSiteIndex.current]] as IPainArea,
            });
            const typedQuestion = insertType(siteQuestions, "site_first");

            setQuestion(typedQuestion);
          }
        }
      } else if (curQuestion.type === "additional") {
        const answer = {
          question_id: curQuestion.id,
          answer_id: selectedAnswer.map((ans) => ans.answer_id),
        }; // 중복 답안 허용
        const { result } = await HeadacheDiagnose.postAdditionalQuestion(answer);
        results.current.push(result);

        const resultList = await HeadacheDiagnose.postResult({
          results: results.current.map((s) => {
            return { result_id: s.id, result: s.content };
          }),
          tracks: [...answers, { question_id: curQuestion.id, answer_id: selectedAnswer.map((ans) => ans.answer_id) }],
          gender,
          birth_year,
          interests,
        });

        navigate("/diagnosis-list", {
          state: {
            dataList: resultList,
          },
        });
      }
    } else {
      if (selectedAnswer[0].is_decisive === 1) {
        const data = {
          question_id: curQuestion.id,
          answer_id: selectedAnswer[0].answer_id,
          gender,
          birth_year,
          interests,
          tracks: answers,
        };

        setLoading(true);

        const decisive = await SleepDisorderDiagnose.postDecisiveQuestion(data);

        const response_state = {
          type: "",
          diagnostic_result: decisive.diagnostic_result,
        };

        new Promise((resolve) => {
          setTimeout(
            () =>
              resolve(
                navigate("/result", {
                  state: response_state,
                })
              ),
            3000
          );
        });
      } else {
        const data = {
          question_id: curQuestion.id,
          answer_id: selectedAnswer[0].answer_id,
        };

        const res = await SleepDisorderDiagnose.postDiagnose(data);

        setCurQuestion(res.question);
        setSelectedAnswer([]);
      }
    }
  };

  const handleBack = async () => {
    if (answers.length === 0) {
      navigate(-1);
    } else if (answers.length === 1) {
      dispatch(popAnswer());

      if (isHeadache(state)) {
        curQuestionIndex.current = 0;
        setCurQuestion(typeMapping(curQuestionList.current[curQuestionIndex.current]));
        setSelectedAnswer([]);
      } else {
        const question = await SleepDisorderDiagnose.getFirstQuestion();

        setCurQuestion(question);
        setSelectedAnswer([]);
      }
    } else if (answers.length >= 2) {
      dispatch(popAnswer());

      if (isHeadache(state)) {
        if (curQuestionIndex.current !== 0) {
          curQuestionIndex.current--;
        } else {
          const prevQuestion = prevQuestionList.current.pop();
          if (!prevQuestion) {
            navigate(-1);
            return;
          }
          if (prevQuestion[0].type === "primary") {
            isPassPrimaryQuestion.current = false;
          }
          if (prevQuestion[0].type === "site_first") {
            curSiteIndex.current--;
          }
          curQuestionList.current = prevQuestionList.current.pop() as IHeadacheQuestion[];
          if (!curQuestionList.current) navigate(-1);

          curQuestionIndex.current = curQuestionList.current.length - 1;
        }
        setCurQuestion(typeMapping(curQuestionList.current[curQuestionIndex.current]));
        setSelectedAnswer([]);
      } else {
        const data = {
          question_id: answers[answers.length - 2].question_id,
          answer_id: answers[answers.length - 2].answer_id[0],
        };

        const res = await SleepDisorderDiagnose.postDiagnose(data);

        setCurQuestion(res.question);
        setSelectedAnswer([]);
      }
    }
  };

  return { loading, curQuestion, handleNext, handleBack, selectedAnswer, setSelectedAnswer };
}

export default useDiagnosis;
