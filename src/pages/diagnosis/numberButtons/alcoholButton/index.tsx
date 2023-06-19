import { Dispatch, useEffect, useState, ChangeEvent } from "react";
import { IQuestion, IAnswer } from "src/interfaces/diagnoseApi/diagnosis";
import { validateNumber } from "src/utils/inputUtils";
import { ButtonBox, Container } from "./index.style";

interface IAlcoholNumberState {
  perWeek: number;
  count: number;
}
interface IAlcoholButtonProps {
  question: IQuestion;
  selectedAnswer: IAnswer[];
  setSelectedAnswer: Dispatch<IAnswer[]>;
}

function AlcoholButton({ setSelectedAnswer }: IAlcoholButtonProps) {
  const [alcoholNumber, setAlcoholNumber] = useState<IAlcoholNumberState>({ perWeek: 0, count: 0 });

  useEffect(() => {
    setSelectedAnswer([
      {
        answer_id: 0,
        answer: alcoholNumber.perWeek + "번",
        next_question: null,
      },
    ]);
  }, [alcoholNumber, setSelectedAnswer]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const number = validateNumber(e.target.value);

    setAlcoholNumber({ ...alcoholNumber, [e.target.name]: number });
  };

  return (
    <Container>
      <ButtonBox>
        1주에
        <input type="number" name="perWeek" value={alcoholNumber.perWeek} onChange={handleChange} />번
      </ButtonBox>
      <ButtonBox>
        1번 마실 때 소주기준
        <input type="number" name="count" value={alcoholNumber.count} onChange={handleChange} />번 병
      </ButtonBox>
    </Container>
  );
}

export default AlcoholButton;
