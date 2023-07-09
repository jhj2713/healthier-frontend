import { useState, ChangeEvent } from "react";
import { validateNumber } from "src/utils/inputUtils";
import * as Styled from "./index.style";
import type { IAnswerButtonProps } from "src/interfaces/diagnosisPage";

export function CountButton({ setSelectedAnswer }: IAnswerButtonProps) {
  const [count, setCount] = useState<number>(0);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const number = validateNumber(e.target.value);

    setCount(number);

    if (number === 0) {
      setSelectedAnswer([]);

      return;
    }

    setSelectedAnswer([
      {
        answer_id: 0,
        answer: number + "번",
        next_question: null,
      },
    ]);
  };

  return (
    <Styled.Container>
      <Styled.Input type="number" value={count || ""} placeholder="대략적인 횟수를 입력" onChange={handleInputChange} />
      <Styled.Text>번</Styled.Text>
    </Styled.Container>
  );
}
