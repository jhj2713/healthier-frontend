import styled from "styled-components";
import { IAnswerButtonProps } from "../../interfaces/diagnosisPage";
import RoundButton from "../buttons/RoundButton";
import theme from "../../lib/theme";
import { Body_1 } from "../../lib/fontStyle";
import { useEffect } from "react";

const Container = styled.section`
  background: transparent;

  margin-bottom: 13rem;
`;
const AnswersContainer = styled.section<{ ansCount: number }>`
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: ${({ ansCount }) =>
    ansCount === 2 ? 13.4 : ansCount === 3 ? 10.2 : 7}rem;
`;
const ButtonBox = styled.section`
  & + & {
    margin-top: 1.2rem;
  }
`;
const Button = styled(Body_1)<{ selected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: calc(100vw - 4rem);
  padding: 1.4rem 2.3rem;

  background-color: ${({ selected, theme }) =>
    selected ? theme.color.sub_blue : "transparent"};
  color: ${({ selected, theme }) =>
    selected ? theme.color.blue : theme.color.grey_300};

  border: ${({ selected, theme }) =>
    !selected && `0.1rem solid ${theme.color.grey_650}`};
  border-radius: 9rem;
  box-sizing: border-box;

  font-weight: 200;
  text-align: center;
`;
const NextButton = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;

  position: fixed;
  bottom: 3rem;
`;

const AnswerButtons = ({
  answers,
  selectedAnswer,
  setSelectedAnswer,
  handleNext,
  isMultiple,
  sleepScore,
  setSleepScore,
}: IAnswerButtonProps) => {
  const handleSelect = (id: number) => {
    let filtered = selectedAnswer.filter((ans) => ans.answer_id !== id);

    if (filtered.length !== selectedAnswer.length) {
      setSelectedAnswer(filtered);
    } else {
      let filtered_idx = answers.findIndex((ans) => ans.answer_id === id);
      setSelectedAnswer([...selectedAnswer, answers[filtered_idx]]);

      if (answers[filtered_idx]?.score) {
        setSleepScore(sleepScore + (answers[filtered_idx].score || 0));
      }
    }
    if (isMultiple === 0) {
      setTimeout(() => handleNext(), 200);
    }
  };
  const handleActive = (id: number): boolean => {
    let idx = selectedAnswer.findIndex((ans) => ans.answer_id === id);
    if (idx !== -1) return true;
    return false;
  };

  useEffect(() => {
    selectedAnswer.sort((a, b) => a.answer_id - b.answer_id);
  }, [selectedAnswer]);

  return (
    <Container>
      <AnswersContainer ansCount={answers.length}>
        {answers.length !== 0 &&
          answers.map((ans, idx) => (
            <ButtonBox key={idx} onClick={() => handleSelect(ans.answer_id)}>
              <Button selected={handleActive(ans.answer_id)}>
                {ans.answer}
              </Button>
            </ButtonBox>
          ))}
      </AnswersContainer>

      {isMultiple === 1 && (
        <NextButton>
          <section onClick={handleNext}>
            <RoundButton
              outline="none"
              backgroundColor={
                selectedAnswer.length === 0
                  ? theme.color.grey_650
                  : theme.color.blue
              }
              color={
                selectedAnswer.length === 0
                  ? theme.color.grey_400
                  : theme.color.grey_100
              }
              text="다음 단계"
            />
          </section>
        </NextButton>
      )}
    </Container>
  );
};

export default AnswerButtons;
