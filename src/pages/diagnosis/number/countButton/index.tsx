import { Dispatch, useEffect, useState, ChangeEvent } from "react";
import { IQuestion, IAnswer } from "src/interfaces/diagnoseApi/diagnosis";
import { ButtonBox, Container } from "./index.style";
import { validateNumber } from "src/utils/inputValidator";

interface ICountButtonProps {
  question: IQuestion;
  selectedAnswer: IAnswer[];
  setSelectedAnswer: Dispatch<IAnswer[]>;
}

function CountButton({ setSelectedAnswer }: ICountButtonProps) {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    setSelectedAnswer([
      {
        answer_id: 0,
        answer: count + "번",
        next_question: null,
      },
    ]);
  }, [count, setSelectedAnswer]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const number = validateNumber(e.target.value);
    setCount(number);
  };

  return (
    <Container>
      <ButtonBox>
        <input type="number" value={count} onChange={handleChange} />번
      </ButtonBox>
    </Container>
  );
}

export default CountButton;
