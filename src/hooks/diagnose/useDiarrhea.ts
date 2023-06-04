import { useEffect, Dispatch, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { IAnswer, IQuestion, ITrackData } from "src/interfaces/diagnoseApi/diagnosis";
import { DIAGNOSE_TYPE } from "src/utils/diagnosis";
import { DiarrheaDiagnose } from "src/api/diagnose/diarrhea";
import { getNextQuestion } from "src/utils/diagnosisHook";

interface IUseDiarrhea {
  state: string;
  curQuestion: IQuestion;
  setCurQuestion: Dispatch<IQuestion>;
  selectedAnswer: IAnswer[];
  setSelectedAnswer: Dispatch<IAnswer[]>;
  setLoading: Dispatch<boolean>;
}

function useDiarrhea({ state, curQuestion, setCurQuestion, selectedAnswer, setSelectedAnswer, setLoading }: IUseDiarrhea) {
  const navigate = useNavigate();

  const questions = useRef<IQuestion[]>([]);
  const questionHistory = useRef<{ question: IQuestion; answer: IAnswer[] }[]>([]);
  const answers = useRef<ITrackData[]>([]);

  useEffect(() => {
    async function getFirstQuestion() {
      const res = await DiarrheaDiagnose.getDiarrhea();

      questions.current = res.question;
      setCurQuestion(questions.current[0]);
    }

    if (state === DIAGNOSE_TYPE.diarrhea) {
      getFirstQuestion();
    }
  }, []);

  const handleDiarrheaNextLogic = async () => {
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

    if (nextQuestion) {
      setCurQuestion(nextQuestion);
    }
    setSelectedAnswer([]);
  };

  const handleDiarrheaBackLogic = () => {
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

  return { handleDiarrheaNextLogic, handleDiarrheaBackLogic };
}

export default useDiarrhea;
