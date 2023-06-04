import { ChangeEvent, Dispatch, useEffect, useState } from "react";
import { IQuestion, IAnswer } from "src/interfaces/diagnoseApi/diagnosis";
import { validateNumber } from "src/utils/inputValidator";
import { ButtonBox, Container } from "./index.style";

interface ISmockingNumberState {
  perDay: number;
  perYear: number;
}
interface ISmockingButtonProps {
  question: IQuestion;
  selectedAnswer: IAnswer[];
  setSelectedAnswer: Dispatch<IAnswer[]>;
}

function SmockingButton({ setSelectedAnswer }: ISmockingButtonProps) {
  const [smockingNumber, setSmockingNumber] = useState<ISmockingNumberState>({ perDay: 0, perYear: 0 });

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
        <input type="number" name="perYear" value={smockingNumber.perYear} onChange={handleChange} />년
      </ButtonBox>
    </Container>
  );
}

export default SmockingButton;
