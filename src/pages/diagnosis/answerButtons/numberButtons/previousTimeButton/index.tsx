import { useState, useEffect } from "react";
import TextFieldStandard from "src/components/textFieldStandard";
import { TIME_TYPES } from "src/data/answer_type";
import { validateNumber } from "src/utils/inputUtils";
import { Container as RootContainer } from "../../index.style";
import NextButton from "../../nextButton";
import * as Styled from "./index.style";
import type { IAnswerButtonProps } from "src/interfaces/diagnosisPage";

type TTimeType = (typeof TIME_TYPES)[number];

interface IPreviousTime {
  number: number;
  type: TTimeType;
}

export function PreviousTimeButton({ setSelectedAnswer, handleClickNextButton, isNextButtonEnabled }: IAnswerButtonProps) {
  const [previousTime, setPreviousTime] = useState<IPreviousTime>({
    number: 0,
    type: "시간",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // TODO: 최대 숫자 설정 필요
    const number = validateNumber(e.target.value);

    setPreviousTime({ ...previousTime, number: number });
  };

  const handleClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name: timeType } = e.currentTarget;

    setPreviousTime({ ...previousTime, type: timeType as TTimeType });
  };

  useEffect(() => {
    if (previousTime.number === 0) {
      setSelectedAnswer((sa) => ({ ...sa, answer_id: [] }));

      return;
    }

    setSelectedAnswer((sa) => ({ ...sa, answer_id: [`${previousTime.number} ${previousTime.type} 전`] }));
  }, [previousTime, setSelectedAnswer]);

  return (
    <RootContainer>
      <Styled.Container>
        <Styled.InputContainer>
          <Styled.InputWrapper>
            <TextFieldStandard
              type="number"
              value={previousTime.number || ""}
              onChange={handleInputChange}
              placeholder="숫자 입력"
              style={{ textAlign: "center" }}
            />
          </Styled.InputWrapper>
          <Styled.TextContainer>
            <Styled.Text className="time-type">시간</Styled.Text>
            <Styled.Text>전부터</Styled.Text>
          </Styled.TextContainer>
        </Styled.InputContainer>

        <Styled.ButtonContainer>
          {TIME_TYPES.map((timeType) => (
            <Styled.Button key={timeType} selected={previousTime.type === timeType} onClick={handleClickButton} name={timeType}>
              {timeType}
            </Styled.Button>
          ))}
        </Styled.ButtonContainer>
      </Styled.Container>

      <NextButton enabled={isNextButtonEnabled()} onClick={handleClickNextButton} />
    </RootContainer>
  );
}
