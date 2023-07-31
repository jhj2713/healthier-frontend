import React from "react";
import * as Styled from "./index.style";

type TTextFieldOutlinedType = "text" | "number";

interface ITextFieldOutlinedProps extends React.HTMLAttributes<HTMLInputElement> {
  borderRadius?: string;
  placeholder?: string;
  type?: TTextFieldOutlinedType;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  label?: string;
  id?: string;
  labelGap?: string;
  placeholderSize?: string;
}

function TextFieldOutlined({
  placeholder,
  type = "text",
  value,
  onChange,
  name,
  label,
  id,
  labelGap = "0.7rem",
  style,
  placeholderSize = "1.6rem",
}: ITextFieldOutlinedProps) {
  return (
    <div>
      {label && (
        <Styled.Label htmlFor={id} labelGap={labelGap}>
          {label}
        </Styled.Label>
      )}
      <Styled.Input
        type={type}
        style={{ ...style }}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        id={id}
        placeholderSize={placeholderSize}
      ></Styled.Input>
    </div>
  );
}

export default TextFieldOutlined;
