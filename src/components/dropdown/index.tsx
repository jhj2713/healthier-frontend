import { memo } from "react";
import { Title, SelectBox } from "./index.style";

export interface IDropdown extends React.HTMLAttributes<HTMLSelectElement> {
  title?: string;
  isSelected: boolean;
  options: string[];
  value: number | string;
  name?: string;
}

function Dropdown({ title, isSelected, options, onChange, value, style, name }: IDropdown) {
  return (
    <div>
      {title && <Title>{title}</Title>}
      <SelectBox onChange={onChange} isSelected={isSelected} value={value} style={style} name={name}>
        <option hidden disabled value="">
          선택해주세요
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </SelectBox>
    </div>
  );
}

export default memo(Dropdown);
