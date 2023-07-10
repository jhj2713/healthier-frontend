import { useEffect } from "react";
import { IAnswerData } from "src/interfaces/diagnoseApi/diagnosis";
import { Container } from "../index.style";
import NextButton from "../nextButton";
import { AnswersContainer, ButtonBox, ButtonText } from "./index.style";
import type { IAnswerButtonProps } from "src/interfaces/diagnosisPage";

interface IDefButton extends IAnswerButtonProps {
  answers: IAnswerData[];
  handleActive: (id: string) => boolean;
}

const DefButton = ({
  answers,
  question,
  selectedAnswer,
  setSelectedAnswer,
  handleActive,
  handleClickNextButton,
  isNextButtonEnabled,
}: IDefButton) => {
  const handleClickAnswer = (selectedId: string) => {
    if (question.is_multiple) {
      if (selectedAnswer.answer_id.includes(selectedId)) {
        setSelectedAnswer({ ...selectedAnswer, answer_id: selectedAnswer.answer_id.filter((id) => id !== selectedId) });

        return;
      }

      setSelectedAnswer({ ...selectedAnswer, answer_id: [...selectedAnswer.answer_id, selectedId] });

      return;
    }
    if (selectedAnswer.answer_id.includes(selectedId)) {
      return;
    }

    setSelectedAnswer({ ...selectedAnswer, answer_id: [selectedId] });
  };

  useEffect(() => {
    if (question.is_multiple || selectedAnswer.answer_id.length === 0) {
      return;
    }

    const timerId = setTimeout(() => {
      handleClickNextButton();
    }, 300);

    return () => clearTimeout(timerId);
  }, [handleClickNextButton, question.is_multiple, selectedAnswer]);

  return (
    <Container>
      <AnswersContainer ansCount={answers.length}>
        {answers.length !== 0 &&
          answers.map((ans, idx) => (
            <ButtonBox key={idx} onClick={() => handleClickAnswer(ans.answer_id + "")} selected={handleActive(ans.answer_id + "")}>
              <section className="button">
                <ButtonText>{ans.answer}</ButtonText>
              </section>
            </ButtonBox>
          ))}
      </AnswersContainer>
      {question.is_multiple && <NextButton enabled={isNextButtonEnabled()} onClick={handleClickNextButton} />}
    </Container>
  );
};

export default DefButton;
