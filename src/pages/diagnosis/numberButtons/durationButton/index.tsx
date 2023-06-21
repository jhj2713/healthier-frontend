import { Dispatch, useState } from "react";
import TextFieldOutlined from "src/components/textFieldOutlined";
import { IQuestion, IAnswer } from "src/interfaces/diagnoseApi/diagnosis";
import theme from "src/lib/theme";
import { validateNumber } from "src/utils/inputUtils";
import * as Styled from "./index.style";

const DURATION_TYPES = ["시간", "일", "주", "개월", "년"] as const;

type TDurationType = typeof DURATION_TYPES[number];

interface IDuration {
  number: number;
  type: TDurationType;
}

interface IDurationButtonProps {
  question: IQuestion;
  selectedAnswer: IAnswer[];
  setSelectedAnswer: Dispatch<React.SetStateAction<IAnswer[]>>;
}

function DurationButton({ setSelectedAnswer }: IDurationButtonProps) {
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
          <Styled.DurationButton onClick={() => handleButtonClick(dt)} key={dt} selected={dt === duration.type}>
            {dt}
          </Styled.DurationButton>
        ))}
      </Styled.ButtonContainer>
    </Styled.Container>
  );
}

export default DurationButton;
