import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IAnswer, IQuestion } from "src/interfaces/diagnoseApi/diagnosis";
import { useAppDispatch } from "src/state";
import { resetAnswer } from "src/state/answerSlice";
import { DIAGNOSE_TYPE } from "src/utils/diagnosis";
import useStomache from "./useStomache";

function useDiagnosis(state: string) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [curQuestion, setCurQuestion] = useState<IQuestion>({
    id: 0,
    question: "",
    answers: [],
    is_multiple: false,
  });
  const [selectedAnswer, setSelectedAnswer] = useState([] as IAnswer[]);
  const [loading, setLoading] = useState(false);

  const { handleStomacheBackLogic, handleStomacheNextLogic } = useStomache({
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
    if (state === DIAGNOSE_TYPE.stomache) {
      handleStomacheNextLogic();
    }
  };

  const handleBack = async () => {
    if (state === DIAGNOSE_TYPE.stomache) {
      handleStomacheBackLogic();
    }
  };

  return { loading, curQuestion, handleNext, handleBack, selectedAnswer, setSelectedAnswer };
}

export default useDiagnosis;
