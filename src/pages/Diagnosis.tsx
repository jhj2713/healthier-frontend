import { useEffect, useState } from "react";
import styled from "styled-components";
import AnswerButtons from "../components/diagnosisPage/AnswerButtons";
import { IAnswer } from "../interfaces/component";
import { first_questions } from "../store/diagnosis";

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
  const [sleepScore, setSleepScore] = useState(0);
  const [curIndex, setCurIndex] = useState(0);
  const [curQuestion, setCurQuestion] = useState("");
  const [curAnswers, setCurAnswers] = useState<IAnswer[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<IAnswer[]>([]);
  const [isMultiple, setIsMultiple] = useState(false);

  useEffect(() => {
    setCurQuestion(first_questions[curIndex].question);
    setCurAnswers(first_questions[curIndex].answers);
    setIsMultiple(first_questions[curIndex].is_multiple);
    setSelectedAnswer([]);
    console.log(sleepScore);
  }, [curIndex]);
  const handleNext = () => {
    if (curIndex < 4) {
      setCurIndex(curIndex + 1);
      setSleepScore(sleepScore + (selectedAnswer[0]?.score || 0));
    } else {
      setCurQuestion("수면의 문제가 일상생활에 지장을 주나요?");
      setCurAnswers([
        { a_id: 1, answer: "예" },
        { a_id: 2, answer: "아니요" },
      ]);
      setIsMultiple(true);
      setSelectedAnswer([]);
    }
  };

  return (
    <Container>
      <Question>{curQuestion}</Question>
      <AnswerButtons
        answers={curAnswers}
        selectedAnswer={selectedAnswer}
        setSelectedAnswer={setSelectedAnswer}
        handleNext={handleNext}
        isMultiple={isMultiple}
      />
    </Container>
  );
};

export default Diagnosis;
