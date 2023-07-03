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
}

function TextFieldOutlined({ borderRadius = "3rem", placeholder, type = "text", value, onChange, name }: ITextFieldOutlinedProps) {
  return (
    <Styled.Input
      type={type}
      style={{ borderRadius }}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
    ></Styled.Input>
  );
}

export default TextFieldOutlined;
