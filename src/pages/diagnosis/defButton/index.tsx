import { Dispatch, useEffect } from "react";
import { IAnswer, IQuestion } from "src/interfaces/diagnoseApi/diagnosis";
import { Container } from "../answerButtons/index.style";
import NextButton from "../nextButton";
import { AnswersContainer, ButtonBox, ButtonText } from "./index.style";

interface IDefButton {
  answers: IAnswer[];
  question: IQuestion;
  selectedAnswer: IAnswer[];
  setSelectedAnswer: Dispatch<IAnswer[]>;
  handleActive: (id: number) => boolean;
  handleClickNextButton: () => void;
}

const DefButton = ({ answers, question, selectedAnswer, setSelectedAnswer, handleActive, handleClickNextButton }: IDefButton) => {
  const handleSelect = (id: number) => {
    if (question.is_multiple) {
      const filtered = selectedAnswer.filter((ans) => ans.answer_id !== id);

      if (filtered.length !== selectedAnswer.length) {
        setSelectedAnswer(filtered);
      } else {
        const filtered_idx = answers.findIndex((ans) => ans.answer_id === id);

        setSelectedAnswer([...selectedAnswer, answers[filtered_idx]]);
      }
    } else {
      const filtered_idx = answers.findIndex((ans) => ans.answer_id === id);

      setSelectedAnswer([answers[filtered_idx]]);
    }
  };

  useEffect(() => {
    if (question.is_multiple || selectedAnswer.length === 0) {
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
            <ButtonBox key={idx} onClick={() => handleSelect(ans.answer_id)} selected={handleActive(ans.answer_id)}>
              <section className="button">
                <ButtonText>{ans.answer}</ButtonText>
              </section>
            </ButtonBox>
          ))}
      </AnswersContainer>
      {question.is_multiple && <NextButton enabled={selectedAnswer.length > 0} onClick={handleClickNextButton} />}
    </Container>
  );
};

export default DefButton;
