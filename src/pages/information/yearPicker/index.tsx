import React, { memo } from "react";
import Dropdown from "src/components/dropdown";
import { IYearPickerProps } from "src/interfaces/informationPage";
import { makeYears } from "src/utils/inputUtils";

const years = makeYears();

function YearPicker({ year, setYear }: IYearPickerProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const target = e.target as HTMLSelectElement;

    setYear(Number(target.value.slice(0, -1)));
  };

  return (
    <div style={{ marginTop: "4.6rem" }}>
      <Dropdown title="출생연도" options={years} onChange={handleChange} isSelected={year !== 0} value={year + "년"} />
    </div>
  );
}

export default memo(YearPicker);
