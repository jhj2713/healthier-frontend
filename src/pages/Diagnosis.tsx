import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import AnswerButtons from "../components/diagnosisPage/AnswerButtons";
import ContentHeader from "../components/header/ContentHeader";
import { IAnswer, IQuestion } from "../interfaces/diagnosisPage";
import { Heading_3 } from "../lib/fontStyle";
import { sleepdisorder_questions } from "../store/diagnosis";
import DiagnosisLoading from "../components/loading/DiagnosisLoading";
import axios from "axios";
import { useAppSelector } from "../state";

const Container = styled.section`
  height: calc(var(--vh, 1vh) * 100 - 9.6rem);
  background: radial-gradient(
      300.02% 130.63% at 164.62% 165.58%,
      rgba(84, 100, 242, 0.9) 0%,
      rgba(52, 62, 135, 0) 100%
    )
    #131416;
  background-attachment: fixed;

  overflow: scroll;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 9.6rem;
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

  const [sleepScore, setSleepScore] = useState(0);
  const [curIndex, setCurIndex] = useState(0);
  const [curQuestion, setCurQuestion] = useState<IQuestion>({
    id: "",
    question: "",
    answers: [],
    is_multiple: 0,
  });
  const [selectedAnswer, setSelectedAnswer] = useState<IAnswer[]>([]);
  const [loading, setLoading] = useState(false);
  const { gender, birth_year, interests } = useAppSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, []);
  useEffect(() => {
    if (curIndex <= 5) {
      let question = {} as IQuestion;
      if (state === "sleepdisorder") {
        question = sleepdisorder_questions[curIndex];
      }
      setCurQuestion(question);
      setSelectedAnswer([]);
    } else {
      if (curIndex === 6) {
        // 첫번째 진단 응답 api 호출
        if (selectedAnswer[0].answer_id === 1) {
          axios
            .post(
              `${process.env.REACT_APP_SERVER_URL}/api/diagnose/${state}/first`,
              {
                answer: "y",
              }
            )
            .then((res) => {
              setCurQuestion(res.data.qustion);
              setSelectedAnswer([]);
            });
        } else {
          const data = {
            answer: "n",
            score_b: sleepScore,
            gender,
            birth_year,
            interests,
          };
          setLoading(true);
          let state = {};
          axios
            .post(
              `${process.env.REACT_APP_SERVER_URL}/api/diagnose/${state}/first`,
              data
            )
            .then((res) => {
              state = {
                type: "",
                diagnostic_result: res.data.diagnostic_result,
              };
            });
          setTimeout(
            () =>
              navigate("/result", {
                state: state,
              }),
            3000
          );
        }
      } else {
        if (selectedAnswer[0].is_decisive === 1) {
          // 결정적응답 api 호출
          const data = {
            question_id: curQuestion.id,
            answer_id: selectedAnswer[0].answer_id,
            sleep_hygiene_score: sleepScore,
            gender,
            birth_year,
            interests,
          };
          /*
          setLoading(true);
          let state = {};
          axios
            .post(
              `${process.env.REACT_APP_SERVER_URL}/api/diagnose/${state}/decisive`,
              data
            )
            .then((res) => {
              state = {
                type: "",
                diagnostic_result: res.data.diagnostic_result,
              }
            }); 
            setTimeout(() => navigate("/result", {
              state: state
            }), 3000); */
        } else {
          // 진단응답 api 호출
          const data = {
            question_id: curQuestion.id,
            answer_id: selectedAnswer[0].answer_id,
          };
          axios
            .post(
              `${process.env.REACT_APP_SERVER_URL}/api/diagnose/${state}`,
              data
            )
            .then((res) => {
              setCurQuestion(res.data.question);
              setSelectedAnswer([]);
            });
        }
      }
    }
  }, [curIndex]);

  const handleNext = () => {
    setCurIndex(curIndex + 1);
  };

  return (
    <>
      {loading ? (
        <DiagnosisLoading />
      ) : (
        <>
          <ContentHeader text="자가 진단" back={false} />
          <Container>
            <Question>{curQuestion.question}</Question>
            <AnswerButtons
              answers={curQuestion.answers}
              selectedAnswer={selectedAnswer}
              setSelectedAnswer={setSelectedAnswer}
              handleNext={handleNext}
              isMultiple={curQuestion.is_multiple}
              sleepScore={sleepScore}
              setSleepScore={setSleepScore}
            />
          </Container>
        </>
      )}
    </>
  );
};

export default Diagnosis;
