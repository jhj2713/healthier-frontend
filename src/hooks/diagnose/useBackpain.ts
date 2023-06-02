import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { IUseDiagnosis } from "src/interfaces/diagnosisHook";
import { IQuestion } from "src/interfaces/diagnoseApi/diagnosis";
import { BackpainDiagnose } from "src/api/diagnose/backpain";
import { getNextQuestion } from "src/utils/diagnosisHook";

function useBackpain({ curQuestion, setCurQuestion, selectedAnswer, setSelectedAnswer }: IUseDiagnosis) {
  const questions = useRef<IQuestion[]>([]);
  const questionHistory = useRef<IQuestion[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getFirstQuestion = async () => {
      const { question: backpainQuestions } = await BackpainDiagnose.getQuestions();
      questions.current = backpainQuestions;
      setCurQuestion(backpainQuestions[0]);
    };

    getFirstQuestion();
  }, [setCurQuestion]);

  const handleBackpainNextLogic = () => {
    if (questionHistory.current === undefined || questions.current === undefined) {
      return;
    }

    questionHistory.current = [...questionHistory.current, curQuestion];

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

  const handleBackpainBackLogic = () => {
    if (questionHistory.current === undefined || questions.current === undefined) {
      return;
    }

    if (questionHistory.current.length === 0) {
      navigate(-1);

      return;
    }

    const lastIdx = questionHistory.current.length - 1;

    setCurQuestion(questionHistory.current[lastIdx]);
    questionHistory.current = questionHistory.current.slice(0, lastIdx);
  };

  return { handleBackpainBackLogic, handleBackpainNextLogic };
}

export default useBackpain;
