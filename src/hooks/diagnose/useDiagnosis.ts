import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IAnswer, IQuestion } from "src/interfaces/diagnoseApi/diagnosis";
import { DIAGNOSE_TYPE } from "src/utils/diagnosis";
import { ANSWER_TYPE } from "src/data/answer_type";
import useStomach from "./useStomach";
import useBackpain from "./useBackpain";

function useDiagnosis(state: string) {
  const navigate = useNavigate();

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

  const { handleStomachBackLogic, handleStomachNextLogic } = useStomach({
    state,
    curQuestion,
    setCurQuestion,
    selectedAnswer,
    setSelectedAnswer,
    setLoading,
  });

  const { handleBackpainBackLogic, handleBackpainNextLogic } = useBackpain({
    state,
    curQuestion,
    setCurQuestion,
    selectedAnswer,
    setSelectedAnswer,
    setLoading,
  });

  useEffect(() => {
    if (!state) navigate("/");
  }, []);

  const handleNext = async () => {
    if (state === DIAGNOSE_TYPE.stomach) {
      handleStomachNextLogic();
    } else if (state === DIAGNOSE_TYPE.backpain) {
      handleBackpainNextLogic();
    }
  };

  const handleBack = async () => {
    if (state === DIAGNOSE_TYPE.stomach) {
      handleStomachBackLogic();
    } else if (state === DIAGNOSE_TYPE.backpain) {
      handleBackpainBackLogic();
    }
  };

  return { loading, curQuestion, handleNext, handleBack, selectedAnswer, setSelectedAnswer };
}

export default useDiagnosis;
