import { useEffect, Dispatch, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { IAnswer, IQuestion, ITrackData } from "src/interfaces/diagnoseApi/diagnosis";
import { useAppSelector } from "src/state";
import { DIAGNOSE_TYPE } from "src/utils/diagnosis";
import { StomachDiagnose } from "src/api/diagnose/stomach";
import { getNextQuestion } from "src/utils/diagnosisHook";

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

  const { gender } = useAppSelector((store) => store.user);

  const questions = useRef<IQuestion[]>([]);
  const questionHistory = useRef<{ question: IQuestion; answer: IAnswer[] }[]>([]);
  const answers = useRef<ITrackData[]>([]);

  useEffect(() => {
    async function getFirstQuestion() {
      const res = await StomachDiagnose.getStomach(gender === "m" ? "male" : "female");

      questions.current = res.question;
      setCurQuestion(questions.current[0]);
    }

    if (state === DIAGNOSE_TYPE.stomach) {
      getFirstQuestion();
    }
  }, []);

  const handleStomachNextLogic = async () => {
    if (questionHistory.current === undefined || questions.current === undefined) {
      return;
    }

    answers.current.push({ question_id: curQuestion.id, answer_id: selectedAnswer.map((ans) => ans.answer_id) });

    questionHistory.current = [...questionHistory.current, { question: curQuestion, answer: selectedAnswer }];

    const nextQuestion = getNextQuestion({
      selectedAnswer,
      curQuestion,
      questions: questions.current,
    });

    // 마지막 질문에서 어떻게 하지

    if (nextQuestion) {
      setCurQuestion(nextQuestion);
    }
    setSelectedAnswer([]);
  };

  const handleStomachBackLogic = () => {
    if (questionHistory.current === undefined || questions.current === undefined) {
      return;
    }

    if (questionHistory.current.length === 0) {
      navigate(-1);

      return;
    }

    const lastIdx = questionHistory.current.length - 1;

    setCurQuestion(questionHistory.current[lastIdx].question);
    questionHistory.current = questionHistory.current.slice(0, lastIdx);
  };

  return { handleStomachNextLogic, handleStomachBackLogic };
}

export default useStomach;
