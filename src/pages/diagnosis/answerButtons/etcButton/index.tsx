import { IAnswerData } from "src/interfaces/diagnoseApi/diagnosis";
import { Container as RootContainer } from "../index.style";
import NextButton from "../nextButton";
import { Container, ButtonBox, ButtonText } from "./index.style";
import type { IAnswerButtonProps } from "src/interfaces/diagnosisPage";

interface IEtcButton extends IAnswerButtonProps {
  answers: IAnswerData[];
  handleActive: (id: string) => boolean;
}

const EtcButton = ({
  answers,
  question,
  selectedAnswer,
  setSelectedAnswer,
  handleActive,
  handleClickNextButton,
  isNextButtonEnabled,
}: IEtcButton) => {
  const handleClickAnswer = (selectedId: string) => {
    if (selectedAnswer.answer_id.includes(selectedId)) {
      setSelectedAnswer({ ...selectedAnswer, answer_id: selectedAnswer.answer_id.filter((id) => id !== selectedId) });

      return;
    }

    setSelectedAnswer({ ...selectedAnswer, answer_id: [...selectedAnswer.answer_id, selectedId] });
  };

  return (
    <RootContainer>
      <Container ansCount={answers.length}>
        {answers.length !== 0 &&
          answers.map((ans, idx) => (
            <ButtonBox key={idx} onClick={() => handleClickAnswer(ans.answer_id)} selected={handleActive(ans.answer_id)}>
              <section className="button">
                <ButtonText>{ans.answer}</ButtonText>
              </section>
            </ButtonBox>
          ))}
        <input />
      </Container>
      {question.is_multiple && <NextButton enabled={isNextButtonEnabled()} onClick={handleClickNextButton} />}
    </RootContainer>
  );
};

export default EtcButton;
