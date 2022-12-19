import React, { memo } from "react";
import { IYearPickerProps } from "../../../interfaces/informationPage";
import { Container, Title, SelectBox } from "./index.style";

const years = Array.from(Array(92).keys())
  .map((y) => y + 1930)
  .reverse();

function YearPicker({ year, setYear }: IYearPickerProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const target = e.target as HTMLSelectElement;
    setYear(Number(target.value));
  };

  return (
    <Container>
      <Title>출생연도</Title>
      <SelectBox onChange={handleChange} defaultValue="" year={year}>
        <option hidden disabled value="">
          선택해주세요
        </option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}년
          </option>
        ))}
      </SelectBox>
    </Container>
  );
}

export default memo(YearPicker);
