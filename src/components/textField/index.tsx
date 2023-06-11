import { Dispatch, ChangeEvent } from "react";
import { Container, StyledLabel, StyledTextArea } from "./index.style";

export interface TTextFieldProps {
  label: string;
  placeholder: string;
  value: string;
  setValue: Dispatch<string>;
}

function TextField({ label, placeholder, value, setValue }: TTextFieldProps) {
  return (
    <Container>
      <StyledLabel>{label}</StyledLabel>
      <StyledTextArea
        placeholder={placeholder}
        spellCheck={false}
        value={value}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)}
      />
    </Container>
  );
}

export default TextField;
