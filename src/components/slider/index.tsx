import { useState } from "react";
import { ChangeEvent } from "react";
import { SliderContainer, SliderNumberLabel, SliderLabelText, SliderInputContainer, SliderTrack, SliderInput } from "./index.style";

interface ISliderProps {
  min: number;
  max: number;
  defaultValue: number;
  labels: string[];
  handleChangeAnswer: (idx: number) => void;
  isLabelActive: (idx: string) => boolean;
}

const SLIDER_NUMBER_LABELS = [100, 50, 0];

function Slider({ min, max, defaultValue, labels, handleChangeAnswer, isLabelActive }: ISliderProps) {
  const [sliderValue, setSliderValue] = useState<number>(defaultValue);

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedIdx = parseInt(e.target.value);

    setSliderValue(selectedIdx);
    handleChangeAnswer(selectedIdx);
  };

  return (
    <SliderContainer>
      <div className="label-texts">
        {labels.map((label, idx) => (
          <SliderLabelText key={label} length={labels.length} selected={isLabelActive(idx + "")}>
            <div className="label-text">{label}</div>
            <div className="label-indicator" />
          </SliderLabelText>
        ))}
      </div>
      <SliderInputContainer>
        <SliderTrack />
        <SliderInput type="range" min={min} max={max} value={sliderValue} onChange={handleChangeInput} />
      </SliderInputContainer>
      <div className="label-numbers">
        {SLIDER_NUMBER_LABELS.map((sliderNumberLabel) => (
          <SliderNumberLabel key={sliderNumberLabel}>{sliderNumberLabel}</SliderNumberLabel>
        ))}
      </div>
    </SliderContainer>
  );
}

export default Slider;
