import { IAnswerButtonProps } from "src/interfaces/diagnosisPage";
import RoundButton from "src/components/roundButton";
import theme from "src/lib/theme";
import { useEffect } from "react";
import { saveAnswer } from "src/state/answerSlice";
import { useAppDispatch } from "src/state";
import { Container, AnswersContainer, ButtonBox, ButtonText, NextButton } from "./index.style";

const AnswerButtons = ({ question, selectedAnswer, setSelectedAnswer, handleNext }: IAnswerButtonProps) => {
  const answers = question.answers;
  const isMultiple = question.is_multiple;

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isMultiple !== 1 && selectedAnswer.length !== 0) {
      new Promise((resolve) => {
        setTimeout(() => resolve(handleNext()), 300);
      });
    }
  }, [selectedAnswer]);

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
            <ButtonBox key={idx} onClick={() => handleSelect(ans.answer_id)} selected={handleActive(ans.answer_id)}>
              <section className="button">
                <ButtonText>{ans.answer}</ButtonText>
              </section>
            </ButtonBox>
          ))}
      </AnswersContainer>

      {isMultiple === 1 && (
        <NextButton onClick={handleMultipleAnswer}>
          <RoundButton
            outline="none"
            backgroundColor={selectedAnswer.length === 0 ? theme.color.grey_650 : theme.color.blue}
            color={selectedAnswer.length === 0 ? theme.color.grey_400 : theme.color.grey_100}
          >
            다음 단계
          </RoundButton>
        </NextButton>
      )}
    </Container>
  );
};

export default AnswerButtons;
