import { ChangeEvent, Dispatch } from "react";
import { IAnswer } from "src/interfaces/diagnoseApi/diagnosis";
import RoundButton from "src/components/roundButton";
import theme from "src/lib/theme";
import { Container } from "../index.style";
import { NextButton } from "../answerButtons/index.style";

interface IStringButtonProps {
  selectedAnswer: IAnswer[];
  setSelectedAnswer: Dispatch<IAnswer[]>;
  handleNext: () => void;
}

function StringButton({ selectedAnswer, setSelectedAnswer, handleNext }: IStringButtonProps) {
  const handleNextButtonClick = () => {
    if (selectedAnswer.length === 0) return;

    handleNext();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer([
      {
        answer_id: 0,
        answer: e.target.value,
        next_question: null,
      },
    ]);
  };

  return (
    <Container>
      <input onChange={handleChange} />
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

export default StringButton;
