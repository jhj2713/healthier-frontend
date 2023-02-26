import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IAnswer, IHeadacheResult, IQuestion } from "src/interfaces/diagnosisPage";
import { useAppDispatch, useAppSelector } from "src/state";
import { resetAnswer, popAnswer } from "src/state/answerSlice";
import { SleepDisorderDiagnose, HeadacheDiagnose } from "src/api/diagnose";
import { IHeadacheQuestion, IPainArea } from "src/interfaces/headacheDiagnoseApi";

const isHeadache = (state: string) => {
  return state === "headache";
};

const PAIN_AREA_MAP =["", "관자놀이",
 "이마의 띠",
   "눈",
   "눈주위",
  "코주위", 
   "턱",
   "뒷머리",
   "머리 전체",
   "뒷목"
]

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
  const curCase = useRef<number>(0); // case 값
  const results = useRef<IHeadacheResult[]>([])

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
        setCurQuestion(curQuestionList.current[curQuestionIndex.current]);
      }
    }

    getFirstQuestion();
  }, []);

  const handleNext = async () => {
    if (isHeadache(state)) {
      if (curQuestionIndex.current < curQuestionList.current.length) {
        setCurQuestion(curQuestionList.current[++curQuestionIndex.current]);
      } else if (basic 질문 마지막) {
        const {questions} = await HeadacheDiagnose.getRedFlagSign();

			prevQuestionList.current.push(questions);
	    curQuestionList.current = questions;
      curQuestionIndex.current = 0;
	    setCurQuestion(curQuestionList.current[curQuestionIndex.current]);
	    setSelectedAnswer([]);
      } else if (red flag 질문 마지막) {
        if (prevQuestionList.current.length !== 2) return;
        const basicAnswers = {
          basic: prevQuestionList.current[0],
          red_flag_sign: prevQuestionList.current[1]
        }
        const {case,questions} = await HeadacheDiagnose.postRedFlagSign(basicAnswers);

        if (case === 2 || case === 3) {
          prevQuestionList.current.push(questions);
          curQuestionList.current = questions;
          curQuestionIndex.current = 0;
          setCurQuestion(curQuestionList.current[curQuestionIndex.current]);
          setSelectedAnswer([]);
          isPassPrimaryQuestion.current = true;
          curCase.current = case;
        } else if (case === 4) {
          curSiteIndex.current++;
          const {questions: siteQuestions} = await HeadacheDiagnose.postFirstHeadacheQuestion({pain_area: PAIN_AREA_MAP[site[curSiteIndex.current]] as IPainArea})

          prevQuestionList.current.push(siteQuestions);
          curQuestionList.current = siteQuestions;
          curQuestionIndex.current = 0;
          setCurQuestion(curQuestionList.current[curQuestionIndex.current]);
          setSelectedAnswer([]);
        }
      } else if (일차성 두통 질문 마지막) {
        const questions = {
          case: curCase.current,
          questions: answers.slice(0) //index 수정하기
        } 

        const {case, questions} = await HeadacheDiagnose.postPrimaryHeadache(questions);

        prevQuestionList.current.push(questions);
        curQuestionList.current = questions;
        curQuestionIndex.current = 0;
        setCurQuestion(curQuestionList.current[curQuestionIndex.current]);
        setSelectedAnswer([]);
        curCase.current = case;
      } else if (일차성 두통 응답) {
        const answer = {
          question_id: curQuestion.id,
          answer_id: selectedAnswer.map((ans) => ans.answer_id)
        }

        const {case, questions, result} = await HeadacheDiagnose.postNextPrimaryHeadache(answer);
        
        if (case === 2 && result) {
          // 진단 결과 저장
          results.current.push(result)

          // 다음 호출
          if (curSiteIndex.current === site.length) {
            const result = await HeadacheDiagnose.postResult({results: site.map((s) => {return {id: s}})})

            // 결과화면
          } else {
            curSiteIndex.current++;
            const {questions: siteQuestions} = await HeadacheDiagnose.postFirstHeadacheQuestion({pain_area: PAIN_AREA_MAP[site[curSiteIndex.current]] as IPainArea})

            prevQuestionList.current.push(siteQuestions);
            curQuestionList.current = siteQuestions;
            curQuestionIndex.current = 0;
            setCurQuestion(curQuestionList.current[curQuestionIndex.current]);
            setSelectedAnswer([]);
          }
        } else {

          prevQuestionList.current.push(questions);
          curQuestionList.current = questions;
          curQuestionIndex.current = 0;
          setCurQuestion(curQuestionList.current[curQuestionIndex.current]);
          setSelectedAnswer([]);
          curCase.current = case;

        }
      } else if (부위 질문) {
        const answer = {
          question_id: curQuestion.id,
          answer_id: selectedAnswer.map((ans) => ans.answer_id)
        }

        const {case, questions, result} = await HeadacheDiagnose.postHeadacheQuestion(answer)
        if (case === 1) {
          prevQuestionList.current.push(questions);
          curQuestionList.current = questions;
          curQuestionIndex.current = 0;
          setCurQuestion(curQuestionList.current[curQuestionIndex.current]);
          setSelectedAnswer([]);
          curCase.current = case;
        } else if (case === 2) {
          // 진단 결과 저장
          results.current.push(result)
          
          if (curSiteIndex.current === site.length) {
            const resultList = await HeadacheDiagnose.postResult({results: site.map((s) => {return {id: s}})})

            // 결과화면
          } else {
            curSiteIndex.current++;
            const {questions: siteQuestions} = await HeadacheDiagnose.postFirstHeadacheQuestion({pain_area: PAIN_AREA_MAP[site[curSiteIndex.current]] as IPainArea})

            prevQuestionList.current.push(siteQuestions);
            curQuestionList.current = siteQuestions;
            curQuestionIndex.current = 0;
            setCurQuestion(curQuestionList.current[curQuestionIndex.current]);
            setSelectedAnswer([]);
          }
        }
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
        setCurQuestion(curQuestionList.current[curQuestionIndex.current]);
        setSelectedAnswer([]);
      } else {
        const question = await SleepDisorderDiagnose.getFirstQuestion(state);

        setCurQuestion(question);
        setSelectedAnswer([]);
      }
    } else if (answers.length !== 0) {
      dispatch(popAnswer());

      if (isHeadache(state)) {
        if (curQuestionIndex.current !== 0) {
          curQuestionIndex.current--;
        } else {
          const curQuestion = prevQuestionList.current.pop();
          if (curQuestion이 일차성 두통 질문) {
            isPassPrimaryQuestion.current = false;
          }
          if (curQuestion이 부위 질문 첫 번째 질문이면) {
            curSiteIndex.current--;
          }
          curQuestionList.current = prevQuestionList.current.pop() as IHeadacheQuestion[];
          curQuestionIndex.current = curQuestionList.current.length - 1;
        }
        setCurQuestion(curQuestionList.current[curQuestionIndex.current]);
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
