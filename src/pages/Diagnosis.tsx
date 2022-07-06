import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import AnswerButtons from "../components/diagnosisPage/AnswerButtons";
import ContentHeader from "../components/header/ContentHeader";
import { IAnswer, IQuestion } from "../interfaces/diagnosisPage";
import { first_questions } from "../store/diagnosis";
import Loading from "./Loading";

const Container = styled.section`
  height: calc(100vh - 9.6rem);
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
const Question = styled.section`
  font-size: 2.2rem;
  font-weight: 300;
  line-height: 140%;
  text-align: center;

  color: ${({ theme }) => theme.color.grey_200};

  width: 26rem;
  margin-top: 7rem;
`;

const Diagnosis = () => {
  const { state } = useLocation();

  const [sleepScore, setSleepScore] = useState(0);
  const [curIndex, setCurIndex] = useState(0);
  const [curQuestion, setCurQuestion] = useState<IQuestion>({
    question: "",
    answers: [],
    is_multiple: false,
  });
  const [selectedAnswer, setSelectedAnswer] = useState<IAnswer[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(state);
    if (curIndex <= 4) {
      setCurQuestion(first_questions[curIndex]);
      setSelectedAnswer([]);
    } else if (curIndex === 5) {
      console.log(sleepScore);
      setCurIndex(curIndex + 1);
      setCurQuestion({
        question: "수면의 문제가 일상생활에 지장을 주나요?",
        answers: [
          { a_id: 1, answer: "예" },
          { a_id: 2, answer: "아니요" },
        ],
        is_multiple: true,
      });
      setSelectedAnswer([]);
      setLoading(true);
      setTimeout(() => setLoading(false), 3000);
    }
  }, [curIndex]);

  const handleNext = () => {
    setCurIndex(curIndex + 1);
  };

  return (
    <>
      {loading ? (
        <Loading />
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
