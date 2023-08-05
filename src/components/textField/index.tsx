import { Dispatch, ChangeEvent } from "react";
import { Container, StyledBottomText, StyledLabel, StyledTextArea } from "./index.style";

export interface TTextFieldProps {
  label?: string;
  placeholder: string;
  value: string;
  setValue: Dispatch<string>;
  bottomText?: string;
}

function TextField({ label, placeholder, value, setValue, bottomText }: TTextFieldProps) {
  return (
    <Container>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledTextArea
        placeholder={placeholder}
        spellCheck={false}
        value={value}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)}
      />
      {bottomText && <StyledBottomText>{bottomText}</StyledBottomText>}
    </Container>
  );
}

export default TextField;
