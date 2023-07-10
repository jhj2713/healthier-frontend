import { useState, useEffect } from "react";
import { validateNumber } from "src/utils/inputUtils";
import { Container as RootContainer } from "../../index.style";
import NextButton from "../../nextButton";
import { PreviousTimeButtonContainer, PreviousTimeInput, PreviousTimeSelect, PreviousTimeText } from "./index.style";
import type { IAnswerButtonProps } from "src/interfaces/diagnosisPage";

const SELECT_TYPES = [
  { value: "hour", text: "시간" },
  { value: "day", text: "일" },
] as const;

interface IPreviousTime {
  number: number;
  type: string;
}

export function PreviousTimeButton({ selectedAnswer, setSelectedAnswer, handleClickNextButton, isNextButtonEnabled }: IAnswerButtonProps) {
  const [previousTime, setPreviousTime] = useState<IPreviousTime>({
    number: 0,
    type: "hour",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // TODO: 최대 숫자 설정 필요
    const number = validateNumber(e.target.value);

    setPreviousTime({ ...previousTime, number: number });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPreviousTime({ ...previousTime, type: e.target.value });
  };

  useEffect(() => {
    if (previousTime.number === 0) {
      setSelectedAnswer({ ...selectedAnswer, answer_id: [] });

      return;
    }

    // setSelectedAnswer([
    //   {
    //     answer_id: 0,
    //     answer: previousTime.number + previousTime.type,
    //     next_question: null,
    //   },
    // ]);
  }, [previousTime, setSelectedAnswer]);

  return (
    <RootContainer>
      <PreviousTimeButtonContainer>
        <PreviousTimeInput value={previousTime.number || ""} onChange={handleInputChange} />
        <PreviousTimeSelect value={previousTime.type} onChange={handleSelectChange}>
          {SELECT_TYPES.map(({ value, text }) => (
            <option key={value} value={value}>
              {text}
            </option>
          ))}
        </PreviousTimeSelect>
        <PreviousTimeText>전</PreviousTimeText>
      </PreviousTimeButtonContainer>

      <NextButton enabled={isNextButtonEnabled()} onClick={handleClickNextButton} />
    </RootContainer>
  );
}
