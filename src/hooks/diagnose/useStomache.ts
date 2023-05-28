import { useEffect, Dispatch } from "react";
import { useNavigate } from "react-router-dom";
import { IAnswer, IQuestion } from "src/interfaces/diagnoseApi/diagnosis";
import { useAppSelector } from "src/state";
import { DIAGNOSE_TYPE } from "src/utils/diagnosis";

interface IUseStomache {
  state: string;
  curQuestion: IQuestion;
  setCurQuestion: Dispatch<IQuestion>;
  selectedAnswer: IAnswer[];
  setSelectedAnswer: Dispatch<IAnswer[]>;
  setLoading: Dispatch<boolean>;
}

function useStomache({ state, curQuestion, setCurQuestion, selectedAnswer, setSelectedAnswer, setLoading }: IUseStomache) {
  const navigate = useNavigate();
  const { answers } = useAppSelector((store) => store.answer);

  useEffect(() => {
    async function getFirstQuestion() {
      // TODO: 첫 번째 요청
    }

    if (state === DIAGNOSE_TYPE.stomache) {
      getFirstQuestion();
    }
  }, []);

  const handleStomacheNextLogic = async () => {
    // TODO: 다음 질문 이동 요청
  };

  const handleStomacheBackLogic = () => {
    if (answers.length === 0) {
      navigate(-1);
    }
  };

  return { handleStomacheNextLogic, handleStomacheBackLogic };
}

export default useStomache;
