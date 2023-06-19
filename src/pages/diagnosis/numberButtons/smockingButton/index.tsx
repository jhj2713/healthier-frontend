import { ChangeEvent, Dispatch, useEffect, useState } from "react";
import { IQuestion, IAnswer } from "src/interfaces/diagnoseApi/diagnosis";
import { validateNumber } from "src/utils/inputUtils";
import { ButtonBox, Container } from "./index.style";

interface ISmockingNumberState {
  perDay: number;
  year: number;
}
interface ISmockingButtonProps {
  question: IQuestion;
  selectedAnswer: IAnswer[];
  setSelectedAnswer: Dispatch<IAnswer[]>;
}

function SmockingButton({ setSelectedAnswer }: ISmockingButtonProps) {
  const [smockingNumber, setSmockingNumber] = useState<ISmockingNumberState>({ perDay: 0, year: 0 });

  useEffect(() => {
    setSelectedAnswer([
      {
        answer_id: 0,
        answer: smockingNumber.perDay + "갑",
        next_question: null,
      },
    ]);
  }, [smockingNumber, setSelectedAnswer]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const number = validateNumber(e.target.value);

    setSmockingNumber({ ...smockingNumber, [e.target.name]: number });
  };

  return (
    <Container>
      <ButtonBox>
        하루
        <input type="number" name="perDay" value={smockingNumber.perDay} onChange={handleChange} />갑
      </ButtonBox>
      <ButtonBox>
        <input type="number" name="perYear" value={smockingNumber.year} onChange={handleChange} />년 동안
      </ButtonBox>
    </Container>
  );
}

export default SmockingButton;
