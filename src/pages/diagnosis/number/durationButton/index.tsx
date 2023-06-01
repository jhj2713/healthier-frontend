import { Dispatch, useEffect, useState } from "react";
import { IQuestion, IAnswer } from "src/interfaces/diagnoseApi/diagnosis";
import { DurationButtonContainer, DurationInput, DurationSelect, DurationText } from "./index.style";
import { validateNumber } from "src/utils/inputValidator";

const SELECT_TYPES = [
  {
    value: "day",
    text: "일",
  },
  {
    value: "month",
    text: "월",
  },
  {
    value: "year",
    text: "년",
  },
] as const;

interface IDuration {
  number: number;
  type: string;
}

interface IDurationButtonProps {
  question: IQuestion;
  selectedAnswer: IAnswer[];
  setSelectedAnswer: Dispatch<IAnswer[]>;
}

function DurationButton({ setSelectedAnswer }: IDurationButtonProps) {
  const [duration, setDuration] = useState<IDuration>({
    number: 0,
    type: "day",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // TODO: 최대 숫자 설정 필요
    const number = validateNumber(e.target.value);
    setDuration({ ...duration, number: number });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDuration({ ...duration, type: e.target.value });
  };

  useEffect(() => {
    if (duration.number === 0) {
      setSelectedAnswer([]);
      return;
    }

    setSelectedAnswer([
      {
        answer_id: 0,
        answer: duration.number + duration.type,
        next_question: null,
      },
    ]);
  }, [duration, setSelectedAnswer]);

  return (
    <DurationButtonContainer>
      <DurationInput type="number" value={duration.number || ""} onChange={handleInputChange} />
      <DurationSelect value={duration.type} onChange={handleSelectChange}>
        {SELECT_TYPES.map(({ value, text }) => (
          <option key={value} value={value}>
            {text}
          </option>
        ))}
      </DurationSelect>
      <DurationText>전</DurationText>
    </DurationButtonContainer>
  );
}

export default DurationButton;
