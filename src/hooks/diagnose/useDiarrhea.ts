import { useEffect, Dispatch, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { IAnswer, IQuestion } from "src/interfaces/diagnoseApi/diagnosis";
import { useAppSelector } from "src/state";
import { popAnswer } from "src/state/answerSlice";
import { DIAGNOSE_TYPE } from "src/utils/diagnosis";
import { useDispatch } from "react-redux";
import { DiarrheaDiagnose } from "src/api/diagnose/diarrhea";
import { ANSWER_TYPE } from "src/data/answer_type";

interface IUseStomach {
  state: string;
  curQuestion: IQuestion;
  setCurQuestion: Dispatch<IQuestion>;
  selectedAnswer: IAnswer[];
  setSelectedAnswer: Dispatch<IAnswer[]>;
  setLoading: Dispatch<boolean>;
}

function useDiarrhea({ state, curQuestion, setCurQuestion, selectedAnswer, setSelectedAnswer, setLoading }: IUseStomach) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { answers } = useAppSelector((store) => store.answer);

  const questionListRef = useRef<IQuestion[]>([]); // 질문 목록
  const depthHistoryRef = useRef<number[]>([]); // 지나온 질문들의 depth
  const curIndex = useRef<number>(0); // 현재 질문 index
  const depthIndex = useRef<number>(0); // 현재 질문 depth

  useEffect(() => {
    async function getFirstQuestion() {
      const res = await DiarrheaDiagnose.getDiarrhea();

      questionListRef.current = res.question;
      setCurQuestion(questionListRef.current[curIndex.current]);
    }

    if (state === DIAGNOSE_TYPE.diarrhea) {
      getFirstQuestion();
    }
  }, []);

  const handleDiarrheaNextLogic = async () => {
    if (curIndex.current === questionListRef.current.length - 1) {
      // TODO: 진단 API 연동
      setLoading(true);

      const timer = setTimeout(() => {
        navigate("/diagnosis-list");
        clearTimeout(timer);
      }, 3000);

      return;
    }

    if (!curQuestion.answers) return;
    depthHistoryRef.current.push(depthIndex.current);

    if (selectedAnswer[0].next_question) {
      depthIndex.current += 1;
      setCurQuestion(selectedAnswer[0].next_question);
      setSelectedAnswer([]);
    } else {
      depthIndex.current = 0;
      curIndex.current += 1;
      setCurQuestion(questionListRef.current[curIndex.current]);
      setSelectedAnswer([]);
    }
  };

  const handleDiarrheaBackLogic = () => {
    if (answers.length === 0) {
      navigate(-1);
    } else {
      if (depthIndex.current !== 0) {
        // 최상위 depth에서부터 최근 question을 찾아나감
        let prevQuestion = questionListRef.current[curIndex.current] as IQuestion;
        for (let i = 0; i < depthIndex.current - 1; i++) {
          prevQuestion = prevQuestion.answers?.find((ans) => ans.next_question)?.next_question as IQuestion;
        }

        setCurQuestion(prevQuestion);
      } else {
        curIndex.current -= 1;

        if (depthHistoryRef.current[depthHistoryRef.current.length - 1] !== 0) {
          // 이전 질문이 depth가 있는 경우
          let prevQuestion = questionListRef.current[curIndex.current] as IQuestion;
          for (let i = 0; i < depthIndex.current - 1; i++) {
            prevQuestion = prevQuestion.answers?.find((ans) => ans.next_question)?.next_question as IQuestion;
          }
          setCurQuestion(prevQuestion);
        } else {
          setCurQuestion(questionListRef.current[curIndex.current]);
        }
      }

      if (depthHistoryRef.current.length < 1) return;
      depthIndex.current = depthHistoryRef.current.pop() as number;

      setSelectedAnswer([]);
      dispatch(popAnswer());
    }
  };

  return { handleDiarrheaNextLogic, handleDiarrheaBackLogic };
}

export default useDiarrhea;
