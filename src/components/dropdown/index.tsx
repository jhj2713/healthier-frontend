import { memo } from "react";
import { IDropdown } from "src/interfaces/component";
import { Container, Title, SelectBox } from "./index.style";

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
