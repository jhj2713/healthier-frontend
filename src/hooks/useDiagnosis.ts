import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IAnswer, IQuestion } from "src/interfaces/diagnosisPage";
import { useAppDispatch } from "src/state";
import { resetAnswer } from "src/state/answerSlice";
import { isHeadache, isSleepDisorder } from "src/utils/diagnosis";
import useHeadache from "./useHeadache";
import useSleepDisorder from "./useSleepDisorder";

function useDiagnosis(state: string) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [curQuestion, setCurQuestion] = useState<IQuestion>({
    id: "",
    question: "",
    answers: [],
    is_multiple: 0,
  });
  const [selectedAnswer, setSelectedAnswer] = useState([] as IAnswer[]);
  const [loading, setLoading] = useState(false);

  const { handleHeadacheLogic, handleHeadacheBackLogic } = useHeadache({
    state,
    curQuestion,
    setCurQuestion,
    selectedAnswer,
    setSelectedAnswer,
    setLoading,
  });
  const { handleSleepDisorderLogic, handleSleepDisorderBackLogic } = useSleepDisorder({
    state,
    curQuestion,
    setCurQuestion,
    selectedAnswer,
    setSelectedAnswer,
    setLoading,
  });

  useEffect(() => {
    if (!state) navigate("/");
    dispatch(resetAnswer());
  }, []);

  const handleNext = async () => {
    if (isHeadache(state)) {
      handleHeadacheLogic();
    } else if (isSleepDisorder(state)) {
      handleSleepDisorderLogic();
    }
  };

  const handleBack = async () => {
    if (isHeadache(state)) {
      handleHeadacheBackLogic();
    } else if (isSleepDisorder(state)) {
      handleSleepDisorderBackLogic();
    }
  };

  return { loading, curQuestion, handleNext, handleBack, selectedAnswer, setSelectedAnswer };
}

export default useDiagnosis;
