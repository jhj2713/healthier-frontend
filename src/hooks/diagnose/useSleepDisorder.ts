import { Dispatch, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SleepDisorderDiagnose } from "src/api/diagnose";
import { IAnswer, IQuestion } from "src/interfaces/diagnosisPage";
import { useAppDispatch, useAppSelector } from "src/state";
import { popAnswer } from "src/state/answerSlice";
import { isSleepDisorder } from "src/utils/diagnosis";

interface IUseSleepDisorder {
  state: string;
  curQuestion: IQuestion;
  setCurQuestion: Dispatch<IQuestion>;
  selectedAnswer: IAnswer[];
  setSelectedAnswer: Dispatch<IAnswer[]>;
  setLoading: Dispatch<boolean>;
}

function useSleepDisorder({ state, curQuestion, setCurQuestion, selectedAnswer, setSelectedAnswer, setLoading }: IUseSleepDisorder) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { gender, birth_year, interests } = useAppSelector((store) => store.user);
  const { answers } = useAppSelector((store) => store.answer);

  useEffect(() => {
    async function getFirstQuestion() {
      const question = await SleepDisorderDiagnose.getFirstQuestion();

      setCurQuestion(question);
    }

    if (isSleepDisorder(state)) {
      getFirstQuestion();
    }
  }, []);

  const handleSleepDisorderLogic = async () => {
    if (selectedAnswer[0].is_decisive === 1) {
      const data = {
        question_id: curQuestion.id,
        answer_id: selectedAnswer[0].answer_id,
        gender,
        birth_year,
        interests,
        tracks: answers,
      };

      setLoading(true);

      const decisive = await SleepDisorderDiagnose.postDecisiveQuestion(data);

      const response_state = {
        type: "",
        diagnostic_result: decisive.diagnostic_result,
      };

      const timer = setTimeout(() => {
        navigate("/result", {
          state: response_state,
        });
        clearTimeout(timer);
      }, 3000);
    } else {
      const data = {
        question_id: curQuestion.id,
        answer_id: selectedAnswer[0].answer_id,
      };

      const res = await SleepDisorderDiagnose.postDiagnose(data);

      setCurQuestion(res.question);
      setSelectedAnswer([]);
    }
  };

  const handleSleepDisorderBackLogic = async () => {
    if (answers.length === 0) {
      navigate(-1);
    } else if (answers.length === 1) {
      dispatch(popAnswer());

      const question = await SleepDisorderDiagnose.getFirstQuestion();

      setCurQuestion(question);
      setSelectedAnswer([]);
    } else if (answers.length >= 2) {
      dispatch(popAnswer());

      const data = {
        question_id: answers[answers.length - 2].question_id,
        answer_id: answers[answers.length - 2].answer_id[0],
      };

      const res = await SleepDisorderDiagnose.postDiagnose(data);

      setCurQuestion(res.question);
      setSelectedAnswer([]);
    }
  };

  return { handleSleepDisorderLogic, handleSleepDisorderBackLogic };
}

export default useSleepDisorder;
