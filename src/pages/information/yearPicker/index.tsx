import React, { memo } from "react";
import Dropdown from "src/components/dropdown";
import { IYearPickerProps } from "src/interfaces/informationPage";

const years = Array.from(Array(92).keys())
  .map((y) => `${y + 1930}년`)
  .reverse();

function YearPicker({ year, setYear }: IYearPickerProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const target = e.target as HTMLSelectElement;

    setYear(Number(target.value.slice(0, -1)));
  };

  return <Dropdown title="출생연도" options={years} handleChange={handleChange} isSelected={year !== 0} value={year + "년"} />;
}

export default memo(YearPicker);
