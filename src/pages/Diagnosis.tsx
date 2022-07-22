import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import AnswerButtons from "../components/diagnosisPage/AnswerButtons";
import ContentHeader from "../components/header/ContentHeader";
import { IAnswer, IQuestion } from "../interfaces/diagnosisPage";
import { Heading_3 } from "../lib/fontStyle";
import {
  sleepdisorder_questions,
  headache_questions,
} from "../store/diagnosis";
import DiagnosisLoading from "../components/loading/DiagnosisLoading";
import axios from "axios";
import { useAppSelector, useAppDispatch } from "../state";
import { savePeriod, saveCycle, saveScore } from "../state/answerSlice";

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
  const { period, cycle, score, answers } = useAppSelector(
    (state) => state.answer
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, []);
  useEffect(() => {
    if (
      (state === "sleepdisorder" && curIndex <= 5) ||
      (state === "headache" && curIndex <= 2)
    ) {
      if (state === "sleepdisorder" && curIndex === 1) {
        dispatch(savePeriod(selectedAnswer[0].score || 0));
      } else if (state === "sleepdisorder" && curIndex === 2) {
        dispatch(saveCycle(selectedAnswer[0].score || 0));
      } else if (state === "sleepdisorder" && curIndex >= 3) {
        const sum = selectedAnswer.reduce(
          (acc, val) => acc + (val.score || 0),
          0
        );
        dispatch(saveScore(sum));
      }

      if (
        state === "headache" &&
        curIndex === 1 &&
        (selectedAnswer[0].answer_id === 1 || selectedAnswer[0].answer_id === 2)
      ) {
        setCurIndex(curIndex + 1);
      } else {
        let question = {} as IQuestion;
        if (state === "sleepdisorder") {
          question = sleepdisorder_questions[curIndex];
        } else {
          question = headache_questions[curIndex];
        }
        setCurQuestion(question);
        setSelectedAnswer([]);
      }
    } else {
      if (state === "sleepdisorder" && curIndex === 6) {
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
              setCurQuestion(res.data.question);
              setSelectedAnswer([]);
            });
        } else {
          const data = {
            answer: "n",
            score_b: score,
            gender,
            birth_year,
            interests,
          };
          setLoading(true);
          let response_state = {};
          axios
            .post(
              `${process.env.REACT_APP_SERVER_URL}/api/diagnose/${state}/first`,
              data
            )
            .then((res) => {
              response_state = {
                type: "",
                diagnostic_result: res.data.diagnostic_result,
              };
            });
          setTimeout(
            () =>
              navigate("/result", {
                state: response_state,
              }),
            3000
          );
        }
      } else if (state === "headache" && curIndex === 3) {
        dispatch(saveScore(selectedAnswer[0].score || 0));
        axios
          .get(`${process.env.REACT_APP_SERVER_URL}/api/diagnose/headache/${1}`)
          .then((res) => {
            setCurQuestion(res.data.question);
            setSelectedAnswer([]);
          });
      } else {
        if (selectedAnswer[0].is_decisive === 1) {
          const data = {
            question_id: curQuestion.id,
            answer_id: selectedAnswer[0].answer_id,
            period,
            score_b: score,
            gender,
            birth_year,
            interests,
            //answers,
            //cycle,
          };

          setLoading(true);
          let response_state = {};
          axios
            .post(
              `${process.env.REACT_APP_SERVER_URL}/api/diagnose/${state}/decisive`,
              data
            )
            .then((res) => {
              response_state = {
                type: "",
                diagnostic_result: res.data.diagnostic_result,
              };
            });
          setTimeout(
            () =>
              navigate("/result", {
                state: response_state,
              }),
            3000
          );
        } else {
          // 진단응답 api 호출
          const data = {
            question_id: curQuestion.id,
            answer_id: selectedAnswer[0].answer_id,
          };
          axios
            .post(`${process.env.REACT_APP_SERVER_URL}/api/diagnose`, data)
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
              question={curQuestion}
              selectedAnswer={selectedAnswer}
              setSelectedAnswer={setSelectedAnswer}
              handleNext={handleNext}
            />
          </Container>
        </>
      )}
    </>
  );
};

export default Diagnosis;
