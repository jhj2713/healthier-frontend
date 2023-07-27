import { useEffect, useState, ChangeEvent } from "react";
import { validateNumber } from "src/utils/inputUtils";
import { Container as RootContainer } from "../../index.style";
import NextButton from "../../nextButton";
import { ButtonBox, Container } from "./index.style";
import type { IAnswerButtonProps } from "src/interfaces/diagnosisPage";

interface IAlcoholNumberState {
  perWeek: number;
  count: number;
}

export function AlcoholButton({ setSelectedAnswer, handleClickNextButton, isNextButtonEnabled }: IAnswerButtonProps) {
  const [alcoholNumber, setAlcoholNumber] = useState<IAlcoholNumberState>({ perWeek: 0, count: 0 });

  useEffect(() => {
    if (alcoholNumber.perWeek === 0 || alcoholNumber.count === 0) {
      setSelectedAnswer((sa) => ({ ...sa, answer_id: [] }));

      return;
    }

    setSelectedAnswer((sa) => ({ ...sa, answer_id: [`1 주에 ${alcoholNumber.count} 번, 1번 마실 때 소주 ${alcoholNumber.perWeek} 번`] }));
  }, [alcoholNumber, setSelectedAnswer]);

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const number = validateNumber(e.target.value);

    setAlcoholNumber({ ...alcoholNumber, [e.target.name]: number });
  };

  return (
    <RootContainer>
      <Container>
        <ButtonBox>
          1주에
          <input type="number" name="perWeek" value={alcoholNumber.perWeek} onChange={handleChangeInput} style={{ color: "#fff" }} />번
        </ButtonBox>
        <ButtonBox>
          1번 마실 때 소주기준
          <input type="number" name="count" value={alcoholNumber.count} onChange={handleChangeInput} style={{ color: "#fff" }} />번 병
        </ButtonBox>
      </Container>

      <NextButton enabled={isNextButtonEnabled()} onClick={handleClickNextButton} />
    </RootContainer>
  );
}
