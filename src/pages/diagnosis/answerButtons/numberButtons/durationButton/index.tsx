import { useState } from "react";
import TextFieldStandard from "src/components/textFieldStandard";
import { TIME_TYPES } from "src/data/answer_type";
import { validateNumber } from "src/utils/inputUtils";
import { Container as RootContainer } from "../../index.style";
import NextButton from "../../nextButton";
import * as Styled from "./index.style";
import type { IAnswerButtonProps } from "src/interfaces/diagnosisPage";

type TDurationType = (typeof TIME_TYPES)[number];

interface IDuration {
  number: number;
  type: TDurationType;
}

export function DurationButton({ selectedAnswer, setSelectedAnswer, handleClickNextButton, isNextButtonEnabled }: IAnswerButtonProps) {
  const [duration, setDuration] = useState<IDuration>({
    number: 0,
    type: "시간",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // TODO: 최대 숫자 설정 필요
    const number = validateNumber(e.target.value);

    setDuration({ ...duration, number: number });

    if (number === 0) {
      setSelectedAnswer({ ...selectedAnswer, answer_id: [] });

      return;
    }
    setSelectedAnswer({ ...selectedAnswer, answer_id: [number + " " + duration.type] });
  };

  const handleButtonClick = (durationType: TDurationType) => {
    setDuration({ ...duration, type: durationType });

    if (duration.number === 0) {
      setSelectedAnswer({ ...selectedAnswer, answer_id: [] });

      return;
    }

    setSelectedAnswer({ ...selectedAnswer, answer_id: [duration.number + " " + durationType] });
  };

  return (
    <RootContainer>
      <Styled.Container>
        <Styled.InputContainer>
          <div style={{ width: "10rem", marginRight: "1.2rem" }}>
            <TextFieldStandard
              type="number"
              value={duration.number || ""}
              onChange={handleInputChange}
              placeholder="숫자 입력"
              style={{ textAlign: "center" }}
            />
          </div>
          <Styled.Text className="duration-type">{duration.type}</Styled.Text>
          <Styled.Text>전부터</Styled.Text>
        </Styled.InputContainer>

        <Styled.ButtonContainer>
          {TIME_TYPES.map((timeType) => (
            <Styled.DurationButton onClick={() => handleButtonClick(timeType)} key={timeType} isSelected={timeType === duration.type}>
              {timeType}
            </Styled.DurationButton>
          ))}
        </Styled.ButtonContainer>
      </Styled.Container>
      <NextButton enabled={isNextButtonEnabled()} onClick={handleClickNextButton} />
    </RootContainer>
  );
}
