import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IAnswer, IQuestion } from "src/interfaces/diagnosisPage";
import { useAppDispatch, useAppSelector } from "src/state";
import { resetAnswer, popAnswer } from "src/state/answerSlice";
import { Diagnose } from "src/api/diagnose";

function useDiagnosis(state: string) {
  const navigate = useNavigate();

  const [curQuestion, setCurQuestion] = useState<IQuestion>({
    id: "",
    question: "",
    answers: [],
    is_multiple: 0,
  });
  const [selectedAnswer, setSelectedAnswer] = useState([] as IAnswer[]);
  const [loading, setLoading] = useState(false);
  const { gender, birth_year, interests, site } = useAppSelector((store) => store.user);
  const { answers } = useAppSelector((store) => store.answer);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!state) navigate("/");
    dispatch(resetAnswer());

    async function getFirstQuestion() {
      const question = await Diagnose.getFirstQuestion(state);

      setCurQuestion(question);
    }

    getFirstQuestion();
  }, []);

  const handleNext = async () => {
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

      const decisive = await Diagnose.postDecisiveQuestion(state, data);

      const response_state = {
        type: "",
        diagnostic_result: decisive.diagnostic_result,
      };

      new Promise((resolve) => {
        setTimeout(
          () =>
            resolve(
              navigate("/result", {
                state: response_state,
              })
            ),
          3000
        );
      });
    } else {
      const nextQuestion = state === "sleepdisorder" || (state === "headache" && !curQuestion.is_last_default);

      if (nextQuestion) {
        const data = {
          question_id: curQuestion.id,
          answer_id: selectedAnswer[0].answer_id,
        };

        const res = await Diagnose.postDiagnose(data);

        setCurQuestion(res.question);
        setSelectedAnswer([]);
      } else {
        const data = {
          site_id: site,
        };

        const res = await Diagnose.postSiteDiagnose(data);

        setCurQuestion(res.question);
        setSelectedAnswer([]);
      }
    }
  };

  const handleBack = async () => {
    if (answers.length === 1) {
      dispatch(popAnswer());

      const question = await Diagnose.getFirstQuestion(state);

      setCurQuestion(question);
      setSelectedAnswer([]);
    } else if (answers.length !== 0) {
      dispatch(popAnswer());

      const data = {
        question_id: answers[answers.length - 2].question_id,
        answer_id: answers[answers.length - 2].answer_id[0],
      };

      const res = await Diagnose.postDiagnose(data);

      setCurQuestion(res.question);
      setSelectedAnswer([]);
    } else {
      navigate(-1);
    }
  };

  return { loading, curQuestion, handleNext, handleBack, selectedAnswer, setSelectedAnswer };
}

export default useDiagnosis;
