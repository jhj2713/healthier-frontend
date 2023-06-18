import { forwardRef } from "react";
import * as Styled from "./index.style";

type TTextField2Type = "number" | "text";

export interface ITextField2Props {
  label?: string;
  placeholder?: string;
  type?: TTextField2Type;
  value: string;
  name?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField2 = forwardRef<HTMLInputElement, ITextField2Props>(({ label, placeholder, type = "text", value, name, onChange }, ref) => {
  return (
    <Styled.Container>
      <Styled.Label>{label}</Styled.Label>
      <Styled.Input type={type} value={value} name={name} placeholder={placeholder} onChange={onChange} ref={ref} />
    </Styled.Container>
  );
});

TextField2.displayName = "TextField2";

export default TextField2;
