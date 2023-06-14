import { useQuery } from "@tanstack/react-query";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { diagnosisFetcher } from "src/api/diagnose/fetcher";
import { queryKeys } from "src/api/queryKeys";
import { ANSWER_TYPE } from "src/data/answer_type";
import { IAnswer, IQuestion, TDiagnoseType, ITrackData, IDiagnoseResponse } from "src/interfaces/diagnoseApi/diagnosis";
import { useAppSelector } from "src/state";
import { getNextQuestion } from "src/utils/diagnosisHook";

function useDiagnosis(state: TDiagnoseType) {
  const navigate = useNavigate();

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

  const questions = useRef<IQuestion[]>([]);
  const questionHistory = useRef<IQuestion[]>([]);
  const answers = useRef<ITrackData[]>([]);

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, [navigate, state]);

  const { data, isSuccess, isLoading } = useQuery<IDiagnoseResponse>({
    queryKey: [queryKeys.DIAGNOSE, gender, state],
    queryFn: () => diagnosisFetcher.getQuestions(state, gender),
    staleTime: Infinity,
  });

  if (isSuccess) {
    questions.current = data.question;

    if (curQuestion.id === 0) {
      setCurQuestion(data.question[0]);
    }
  }

  const handleNext = () => {
    if (questionHistory.current === undefined || questions.current === undefined) {
      return;
    }

    answers.current = [...answers.current, { question_id: curQuestion.id, answer_id: selectedAnswer.map((ans) => ans.answer_id) }];
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

    const historyLastIdx = questionHistory.current.length - 1;
    const answersLastIdx = answers.current.length - 1;

    setCurQuestion(questionHistory.current[historyLastIdx]);
    questionHistory.current = questionHistory.current.slice(0, historyLastIdx);
    answers.current = answers.current.slice(0, answersLastIdx);
  };

  return { isLoading, curQuestion, handleNext, handleBack, selectedAnswer, setSelectedAnswer };
}

export default useDiagnosis;
