import { Dispatch } from "react";
import RoundButton from "src/components/roundButton";
import { IQuestion, IAnswer } from "src/interfaces/diagnoseApi/diagnosis";
import theme from "src/lib/theme";
import { NextButton } from "../answerButtons/index.style";
import { Container } from "../index.style";
import NumberAnswerButton from "./numberAnswerButton";

interface INumberButtonProps {
  question: IQuestion;
  selectedAnswer: IAnswer[];
  setSelectedAnswer: Dispatch<IAnswer[]>;
  handleNext: () => void;
}

function NumberButtons({ question, selectedAnswer, setSelectedAnswer, handleNext }: INumberButtonProps) {
  const handleNextButtonClick = () => {
    if (selectedAnswer.length === 0) {
      return;
    }

    // TODO: answer state 저장

    handleNext();
  };

  return (
    <Container>
      <NumberAnswerButton question={question} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />
      <NextButton onClick={handleNextButtonClick}>
        <RoundButton
          outline="none"
          backgroundColor={selectedAnswer.length === 0 ? theme.color.grey_650 : theme.color.blue}
          color={selectedAnswer.length === 0 ? theme.color.grey_400 : theme.color.grey_100}
        >
          다음 단계
        </RoundButton>
      </NextButton>
    </Container>
  );
}

export default NumberButtons;
