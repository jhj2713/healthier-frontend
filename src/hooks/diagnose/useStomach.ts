import { useEffect, Dispatch, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { IAnswer, IQuestion } from "src/interfaces/diagnoseApi/diagnosis";
import { useAppSelector } from "src/state";
import { popAnswer } from "src/state/answerSlice";
import { DIAGNOSE_TYPE } from "src/utils/diagnosis";
import { StomachDiagnose } from "src/api/diagnose/stomach";
import { useDispatch } from "react-redux";

interface IUseStomach {
  state: string;
  curQuestion: IQuestion;
  setCurQuestion: Dispatch<IQuestion>;
  selectedAnswer: IAnswer[];
  setSelectedAnswer: Dispatch<IAnswer[]>;
  setLoading: Dispatch<boolean>;
}

function useStomach({ state, curQuestion, setCurQuestion, selectedAnswer, setSelectedAnswer, setLoading }: IUseStomach) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { answers } = useAppSelector((store) => store.answer);
  const { gender } = useAppSelector((store) => store.user);

  const questionListRef = useRef<IQuestion[]>([]); // 질문 목록
  const depthHistoryRef = useRef<number[]>([]); // 지나온 질문들의 depth
  const curIndex = useRef<number>(0); // 현재 질문 index
  const depthIndex = useRef<number>(0); // 현재 질문 depth

  useEffect(() => {
    async function getFirstQuestion() {
      const res = await StomachDiagnose.getStomach(gender === "m" ? "male" : "female");

      questionListRef.current = res.question;
      setCurQuestion(questionListRef.current[curIndex.current]);
    }

    if (state === DIAGNOSE_TYPE.stomach) {
      getFirstQuestion();
    }
  }, []);

  const handleStomachNextLogic = async () => {
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

  const handleStomachBackLogic = () => {
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
          let prevQuestion = questionListRef.current[curIndex.current].answers?.find((ans) => ans.next_question)
            ?.next_question as IQuestion;
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

  return { handleStomachNextLogic, handleStomachBackLogic };
}

export default useStomach;
