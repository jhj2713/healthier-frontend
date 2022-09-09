import styled from "styled-components";
import { IAnswerButtonProps } from "../../interfaces/diagnosisPage";
import RoundButton from "../buttons/RoundButton";
import theme from "../../lib/theme";
import { Body_1 } from "../../lib/fontStyle";
import { useEffect } from "react";
import { saveAnswer } from "../../state/answerSlice";
import { useAppDispatch } from "../../state";

const Container = styled.section`
  background: transparent;

  margin-bottom: 13rem;
`;
const AnswersContainer = styled.section<{ ansCount: number }>`
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: ${({ ansCount }) => (ansCount === 2 ? 13.4 : ansCount === 3 ? 10.2 : 7)}rem;
`;
const ButtonBox = styled.section`
  width: calc(100vw - 4rem);
  & + & {
    margin-top: 1.2rem;
  }
`;
const Button = styled.section<{ selected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: ${({ selected }) => (selected ? "1.4rem 2.3rem" : "1.3rem 2.3rem")};

  background-color: ${({ selected, theme }) => (selected ? theme.color.sub_blue : "transparent")};
  color: ${({ selected, theme }) => (selected ? theme.color.blue : theme.color.grey_300)};

  border: ${({ selected, theme }) => !selected && `0.1rem solid ${theme.color.grey_650}`};
  border-radius: 9rem;

  cursor: pointer;
`;
const ButtonText = styled(Body_1)`
  font-weight: 200;
  text-align: center;

  width: 26rem;
`;
const NextButton = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;

  position: fixed;
  bottom: 0;
  padding-bottom: 3rem;
  padding-top: 0.6rem;

  background: linear-gradient(180deg, rgba(31, 37, 79, 0) 0%, #23284b 50%);
`;

const AnswerButtons = ({ question, selectedAnswer, setSelectedAnswer, handleNext }: IAnswerButtonProps) => {
  const answers = question.answers;
  const isMultiple = question.is_multiple;

  const dispatch = useAppDispatch();

  const handleSelect = (id: number) => {
    if (isMultiple === 1) {
      let filtered = selectedAnswer.filter((ans) => ans.answer_id !== id);

      if (filtered.length !== selectedAnswer.length) {
        setSelectedAnswer(filtered);
      } else {
        let filtered_idx = answers.findIndex((ans) => ans.answer_id === id);
        setSelectedAnswer([...selectedAnswer, answers[filtered_idx]]);
      }
    } else {
      let filtered_idx = answers.findIndex((ans) => ans.answer_id === id);
      setSelectedAnswer([answers[filtered_idx]]);
      dispatch(
        saveAnswer({
          question_id: question.id,
          answer_id: [answers[filtered_idx].answer_id],
        })
      );

      new Promise((resolve) => {
        setTimeout(() => resolve(handleNext()), 300);
      });
    }
  };
  const handleActive = (id: number): boolean => {
    return selectedAnswer.findIndex((ans) => ans.answer_id === id) !== -1;
  };
  const handleMultipleAnswer = () => {
    dispatch(
      saveAnswer({
        question_id: question.id,
        answer_id: selectedAnswer.map((ans) => ans.answer_id),
      })
    );

    handleNext();
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
                <ButtonText>{ans.answer}</ButtonText>
              </Button>
            </ButtonBox>
          ))}
      </AnswersContainer>

      {isMultiple === 1 && (
        <NextButton onClick={handleMultipleAnswer}>
          <RoundButton
            outline="none"
            backgroundColor={selectedAnswer.length === 0 ? theme.color.grey_650 : theme.color.blue}
            color={selectedAnswer.length === 0 ? theme.color.grey_400 : theme.color.grey_100}
            text="다음 단계"
          />
        </NextButton>
      )}
    </Container>
  );
};

export default AnswerButtons;
