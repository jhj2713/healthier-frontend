import { forwardRef } from "react";
import * as Styled from "./index.style";

type TTextFieldStandardType = "number" | "text";

export interface ITextFieldStandardProps extends React.HTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: TTextFieldStandardType;
  value: string | number;
  name?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextFieldStandard = forwardRef<HTMLInputElement, ITextFieldStandardProps>(
  ({ label, placeholder, type = "text", value, name, onChange, style }, ref) => {
    return (
      <Styled.Container>
        <Styled.Label>{label}</Styled.Label>
        <Styled.Input type={type} value={value} name={name} placeholder={placeholder} onChange={onChange} ref={ref} style={style} />
      </Styled.Container>
    );
  }
);

TextFieldStandard.displayName = "TextFieldStandard";

export default TextFieldStandard;
