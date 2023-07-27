import { useEffect, useRef } from "react";
import { IAnswerData } from "src/interfaces/diagnoseApi/diagnosis";
import { Container } from "../index.style";
import NextButton from "../nextButton";
import { AnswersContainer, ButtonBox, ButtonText } from "./index.style";
import type { IAnswerButtonProps } from "src/interfaces/diagnosisPage";

interface IDefButton extends IAnswerButtonProps {
  answers: IAnswerData[];
  handleActive: (id: string) => boolean;
}

type TPrevAnswerType = "NA" | "DEF";

const DefButton = ({
  answers,
  question,
  selectedAnswer,
  setSelectedAnswer,
  handleActive,
  handleClickNextButton,
  isNextButtonEnabled,
}: IDefButton) => {
  const prevAnswerType = useRef<TPrevAnswerType>("DEF");

  const handleClickAnswer = (selectedId: string) => {
    const { answer_id } = selectedAnswer;

    if (!question.is_multiple) {
      if (answer_id.length > 0 || answer_id.includes(selectedId)) {
        return;
      }

      setSelectedAnswer({ ...selectedAnswer, answer_id: [selectedId] });

      return;
    }

    if (question.answer_type === "NA" && Number(selectedId) === answers.length - 1) {
      setSelectedAnswer({ ...selectedAnswer, answer_id: [selectedId] });
      prevAnswerType.current = "NA";

      return;
    }

    if (answer_id.includes(selectedId)) {
      setSelectedAnswer({ ...selectedAnswer, answer_id: answer_id.filter((id) => id !== selectedId) });
      prevAnswerType.current = "DEF";

      return;
    }
    if (prevAnswerType.current === "NA") {
      setSelectedAnswer({ ...selectedAnswer, answer_id: [selectedId] });
      prevAnswerType.current = "DEF";

      return;
    }

    setSelectedAnswer({ ...selectedAnswer, answer_id: [...answer_id, selectedId] });
    prevAnswerType.current = "DEF";
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
