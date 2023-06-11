import { ChangeEvent, memo } from "react";
import { Container, Title, SelectBox } from "./index.style";

export interface IDropdown {
  title: string;
  isSelected: boolean;
  options: string[];
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

function Dropdown({ title, isSelected, options, handleChange }: IDropdown) {
  return (
    <Container>
      <Title>{title}</Title>
      <SelectBox onChange={handleChange} defaultValue="" isSelected={isSelected}>
        <option hidden disabled value="">
          선택해주세요
        </option>
        {options.map((currentYear) => (
          <option key={currentYear} value={currentYear}>
            {currentYear}
          </option>
        ))}
      </SelectBox>
    </Container>
  );
}

export default memo(Dropdown);
