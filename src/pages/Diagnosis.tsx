import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import AnswerButtons from "../components/diagnosisPage/AnswerButtons";
import ContentHeader from "../components/header/ContentHeader";
import { IAnswer, IQuestion } from "../interfaces/diagnosisPage";
import { Heading_3 } from "../lib/fontStyle";
import DiagnosisLoading from "../components/loading/DiagnosisLoading";
import axios from "axios";
import { useAppSelector, useAppDispatch } from "../state";
import { resetAnswer, back } from "../state/answerSlice";

const Container = styled.section`
  height: calc(100vh - 5.6rem);
  background: radial-gradient(300.02% 130.63% at 164.62% 165.58%, rgba(84, 100, 242, 0.9) 0%, rgba(52, 62, 135, 0) 100%) #131416;
  background-attachment: fixed;

  overflow: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 5.6rem;
`;
const Question = styled(Heading_3)`
  text-align: center;

  color: ${({ theme }) => theme.color.grey_200};

  margin-top: 7rem;
  padding: 0 5rem;
`;

const Diagnosis = () => {
  const navigate = useNavigate();
  const { state } = useLocation() as { state: string };

  const [curQuestion, setCurQuestion] = useState<IQuestion>({
    id: "",
    question: "",
    answers: [],
    is_multiple: 0,
  });
  const [selectedAnswer, setSelectedAnswer] = useState([] as IAnswer[]);
  const [loading, setLoading] = useState(false);
  const { gender, birth_year, interests, site } = useAppSelector((state) => state.user);
  const { answers } = useAppSelector((state) => state.answer);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetAnswer());
    if (!state) {
      navigate("/");
    }

    axios.get(`${process.env.REACT_APP_SERVER_URL}/api/diagnose/${state}/first`).then((res) => {
      setCurQuestion(res.data);
    });
  }, []);

  const handleNext = () => {
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
      let response_state = {};
      axios.post(`${process.env.REACT_APP_SERVER_URL}/api/diagnose/${state}/decisive`, data).then((res) => {
        response_state = {
          type: "",
          diagnostic_result: res.data.diagnostic_result,
        };
      });
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
      const data = nextQuestion
        ? {
            question_id: curQuestion.id,
            answer_id: selectedAnswer[0].answer_id,
          }
        : { site_id: site };

      axios.post(`${process.env.REACT_APP_SERVER_URL}/api/diagnose${nextQuestion ? "" : "/headache/last-default"}`, data).then((res) => {
        setCurQuestion(res.data.question);
        setSelectedAnswer([]);
      });
    }
  };

  const handleBack = () => {
    if (answers.length === 1) {
      dispatch(back());
      axios.get(`${process.env.REACT_APP_SERVER_URL}/api/diagnose/${state}/first`).then((res) => {
        setCurQuestion(res.data);
        setSelectedAnswer([]);
      });
    } else if (answers.length !== 0) {
      dispatch(back());
      axios
        .post(`${process.env.REACT_APP_SERVER_URL}/api/diagnose`, {
          question_id: answers[answers.length - 2].question_id,
          answer_id: answers[answers.length - 2].answer_id[0],
        })
        .then((res) => {
          setCurQuestion(res.data.question);
          setSelectedAnswer([]);
        });
    } else {
      navigate(-1);
    }
  };

  return (
    <>
      {loading ? (
        <DiagnosisLoading />
      ) : (
        <>
          <ContentHeader text="자가 진단" back={true} callback={handleBack} />
          <Container>
            <Question>{curQuestion.question}</Question>
            <AnswerButtons question={curQuestion} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} handleNext={handleNext} />
          </Container>
        </>
      )}
    </>
  );
};

export default Diagnosis;
