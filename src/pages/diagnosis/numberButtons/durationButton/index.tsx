import { useState } from "react";
import RoundButton from "src/components/roundButton";
import TextFieldOutlined from "src/components/textFieldOutlined";
import theme from "src/lib/theme";
import { validateNumber } from "src/utils/inputUtils";
import { Container as RootContainer } from "../../answerButtons/index.style";
import NextButton from "../../nextButton";
import * as Styled from "./index.style";
import type { IAnswerButtonProps } from "src/interfaces/diagnosisPage";

const DURATION_TYPES = ["시간", "일", "주", "개월", "년"] as const;

type TDurationType = typeof DURATION_TYPES[number];

interface IDuration {
  number: number;
  type: TDurationType;
}

function DurationButton({ selectedAnswer, setSelectedAnswer, handleClickNextButton }: IAnswerButtonProps) {
  const [duration, setDuration] = useState<IDuration>({
    number: 0,
    type: "시간",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // TODO: 최대 숫자 설정 필요
    const number = validateNumber(e.target.value);

    setDuration({ ...duration, number: number });

    if (number === 0) {
      setSelectedAnswer([]);

      return;
    }

    setSelectedAnswer((sa) => [{ ...sa[0], answer: number + duration.type }]);
  };

  const handleButtonClick = (durationType: TDurationType) => {
    setDuration({ ...duration, type: durationType });

    if (duration.number === 0) {
      setSelectedAnswer([]);

      return;
    }

    setSelectedAnswer((sa) => [{ ...sa[0], answer: duration.number + durationType }]);
  };

  return (
    <RootContainer>
      <Styled.Container>
        <Styled.InputContainer>
          <div style={{ width: "130px", marginRight: "1.2rem" }}>
            <TextFieldOutlined type="number" value={duration.number || ""} onChange={handleInputChange} placeholder="숫자 입력" />
          </div>
          <Styled.Text color={theme.color.sub_blue} className="duration-type">
            {duration.type}
          </Styled.Text>
          <Styled.Text color={theme.color.grey_200}>전부터</Styled.Text>
        </Styled.InputContainer>

        <Styled.ButtonContainer>
          {DURATION_TYPES.map((dt) => (
            // <Styled.DurationButton onClick={() => handleButtonClick(dt)} key={dt} selected={dt === duration.type}>
            //   {dt}
            // </Styled.DurationButton>
            <RoundButton
              outline={duration.type === dt ? theme.color.sub_blue : theme.color.grey_650}
              backgroundColor={duration.type === dt ? theme.color.sub_blue : "transparent"}
              color={duration.type === dt ? "#5464F2" : theme.color.grey_300}
              style={{ marginBottom: "1.2rem" }}
              onClick={() => handleButtonClick(dt)}
              key={dt}
            >
              {dt}
            </RoundButton>
          ))}
        </Styled.ButtonContainer>
      </Styled.Container>
      <NextButton enabled={selectedAnswer.length !== 0} onClick={handleClickNextButton} />
    </RootContainer>
  );
}

export default DurationButton;
