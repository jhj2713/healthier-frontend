import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "src/state";
import { resetAnswer } from "src/state/answerSlice";
import { IAnswer, IQuestion, TDiagnoseType } from "src/interfaces/diagnoseApi/diagnosis";
import { ANSWER_TYPE } from "src/data/answer_type";
import { diagnosisFetcher } from "src/api/diagnose/fetcher";
import { getNextQuestion } from "src/utils/diagnosisHook";

function useDiagnosis(state: TDiagnoseType) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { gender } = useAppSelector((appState) => appState.user);
  const [curQuestion, setCurQuestion] = useState<IQuestion>({
    id: 0,
    question: "",
    is_multiple: false,
    image_url: null,
    answer_type: ANSWER_TYPE.DEF,
    answers: null,
  });
  const [selectedAnswer, setSelectedAnswer] = useState([] as IAnswer[]);
  const [loading, setLoading] = useState(false);

  const questions = useRef<IQuestion[]>([]);
  const questionHistory = useRef<IQuestion[]>([]);

  useEffect(() => {
    if (!state) navigate("/");

    const getFirstQuestion = async () => {
      const { question: diagnosisQuestions } = await diagnosisFetcher.getQuestions(state, gender);
      questions.current = diagnosisQuestions;

      console.log(diagnosisQuestions);
      setCurQuestion(diagnosisQuestions[0]);
    };

    getFirstQuestion();
    dispatch(resetAnswer());
  }, [dispatch, navigate, gender, state]);

  const handleNext = () => {
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

  const handleBack = () => {
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

  return { loading, curQuestion, handleNext, handleBack, selectedAnswer, setSelectedAnswer };
}

export default useDiagnosis;
