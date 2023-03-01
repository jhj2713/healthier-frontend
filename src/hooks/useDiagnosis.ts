import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IAnswer, IHeadacheResult, IQuestion } from "src/interfaces/diagnosisPage";
import { useAppDispatch, useAppSelector } from "src/state";
import { resetAnswer, popAnswer } from "src/state/answerSlice";
import { SleepDisorderDiagnose, HeadacheDiagnose } from "src/api/diagnose";
import { IHeadacheQuestion, IPainArea } from "src/interfaces/headacheDiagnoseApi";
import { isHeadache, typeMapping, PAIN_AREA_MAP } from "src/utils/diagnosis";

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
  const curCase = useRef<number>(0); // 일차성 두통 위한 case 값
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

        prevQuestionList.current.push(questions);
        curQuestionList.current = questions;
        curQuestionIndex.current = 0;
        setCurQuestion(typeMapping(curQuestionList.current[curQuestionIndex.current]));
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
      if (curQuestionIndex.current < curQuestionList.current.length) {
        curQuestionIndex.current++;
        setCurQuestion(typeMapping(curQuestionList.current[curQuestionIndex.current]));
      } else if (curQuestion.type === "basic") {
        const { questions } = await HeadacheDiagnose.getRedFlagSign();
        setQuestion(questions);
      } else if (curQuestion.type === "red_flag") {
        if (prevQuestionList.current.length !== 2) return;
        const { case: caseNum, questions } = await HeadacheDiagnose.postRedFlagSign({ questions: answers });

        if (caseNum === 2 || caseNum === 3) {
          setQuestion(questions);
          isPassPrimaryQuestion.current = true;
          curCase.current = caseNum;
        } else if (caseNum === 4) {
          curSiteIndex.current++;
          const { questions: siteQuestions } = await HeadacheDiagnose.postFirstHeadacheQuestion({
            pain_area: PAIN_AREA_MAP[site[curSiteIndex.current]] as IPainArea,
          });

          setQuestion([{ ...siteQuestions[0], type: "first_site" }]);
        }
      } else if (curQuestion.type === "primary_question") {
        // 일차성 두통 마지막 질문
        const primaryQuestions = {
          case: curCase.current,
          questions: answers.slice(9, 13), // index 확인
        };

        const { questions } = await HeadacheDiagnose.postPrimaryHeadache(primaryQuestions);
        setQuestion(questions);
      } else if (curQuestion.type === "primary_answer") {
        // 일차성 두통 응답
        const primaryAnswer = {
          question_id: curQuestion.id,
          answer_id: selectedAnswer.map((ans) => ans.answer_id),
        };

        const { case: caseNum, questions, result } = await HeadacheDiagnose.postNextPrimaryHeadache(primaryAnswer);

        if (caseNum === 2 && result) {
          results.current.push(result);

          if (curSiteIndex.current === site.length) {
            const { questions: additionalQuestion } = await HeadacheDiagnose.getAdditionalQuestion();
            setQuestion(additionalQuestion);
          } else {
            curSiteIndex.current++;
            const { questions: siteQuestions } = await HeadacheDiagnose.postFirstHeadacheQuestion({
              pain_area: PAIN_AREA_MAP[site[curSiteIndex.current]] as IPainArea,
            });

            setQuestion([{ ...siteQuestions[0], type: "first_site" }]);
          }
        } else {
          setQuestion(questions);
        }
      } else if (curQuestion.type === "site") {
        const answer = {
          question_id: curQuestion.id,
          answer_id: selectedAnswer.map((ans) => ans.answer_id),
        };

        const { case: caseNum, questions, result } = await HeadacheDiagnose.postHeadacheQuestion(answer);
        if (caseNum === 1) {
          setQuestion(questions);
        } else if (caseNum === 2) {
          if (!result) return;

          results.current.push(result);

          if (curSiteIndex.current === site.length) {
            const { questions: additionalQuestion } = await HeadacheDiagnose.getAdditionalQuestion();
            setQuestion(additionalQuestion);
          } else {
            curSiteIndex.current++;
            const { questions: siteQuestions } = await HeadacheDiagnose.postFirstHeadacheQuestion({
              pain_area: PAIN_AREA_MAP[site[curSiteIndex.current]] as IPainArea,
            });

            setQuestion([{ ...siteQuestions[0], type: "first_site" }]);
          }
        }
      } else if (curQuestion.type === "additional") {
        const result = await HeadacheDiagnose.postResult({
          results: results.current.map((s) => {
            return { id: s.id };
          }),
        });
        // 결과화면
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
    if (answers.length === 1) {
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
    } else if (answers.length !== 0) {
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
    } else {
      navigate(-1);
    }
  };

  return { loading, curQuestion, handleNext, handleBack, selectedAnswer, setSelectedAnswer };
}

export default useDiagnosis;
