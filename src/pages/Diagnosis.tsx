import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import AnswerButtons from "../components/diagnosisPage/AnswerButtons";
import ContentHeader from "../components/header/ContentHeader";
import { IAnswer, IQuestion } from "../interfaces/diagnosisPage";
import { Heading_3 } from "../lib/fontStyle";
import { first_questions } from "../store/diagnosis";
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
  const { state } = useLocation();

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
    if (curIndex <= 5) {
      setCurQuestion(first_questions[curIndex]);
      setSelectedAnswer([]);
    } else {
      if (curIndex === 6) {
        if (selectedAnswer[0].answer_id === 1) {
          /* axios
            .post("http://localhost:3000/api/diagnose/sleepdisorder/first", {
              answer: "y",
            })
            .then(); */
          const response = {
            is_result: 0,
            question: {
              id: "62ca4918705b0e3bdeefc746",
              question: "자신을 가장 잘 설명하는 증상을 골라주세요",
              is_multiple: 0,
              answers: [
                {
                  answer_id: 0,
                  answer: "잠드는 것이 어려워요",
                  is_decisive: 0,
                },
                {
                  answer_id: 1,
                  answer: "자는 도중 중간에 자꾸 깨요",
                  is_decisive: 0,
                },
              ],
            },
          };
          setCurQuestion(response.question);
          setSelectedAnswer([]);
        } else {
          const data = {
            answer: "n",
            score_b: sleepScore,
            gender,
            birth_year,
            interests,
          };
          /* axios
            .post("http://localhost:3000/api/diagnose/sleepdisorder/first", 
              data,
            )
            .then(); */
          console.log(data);
          // setLoading(true);
          // navigate("/result");
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
          /*axios
            .post(
              "http://localhost:3000/api/diagnose/sleepdisorder/decisive",
              data
            )
            .then(); */
          // setLoading(true);
          // navigate("/result");
          console.log(data);
        } else {
          // 진단응답 api 호출
          const data = {
            question_id: curQuestion.id,
            answer_id: selectedAnswer[0].answer_id,
          };
          axios
            .post("http://localhost:3000/api/diagnose/sleepdisorder", data)
            .then((res) => console.log(res));
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
          <ContentHeader text="자가 진단" />
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
