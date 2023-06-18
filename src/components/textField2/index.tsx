import * as Styled from "./index.style";

type TTextField2Type = "number" | "text";

export interface ITextField2Props {
  label?: string;
  placeholder?: string;
  type?: TTextField2Type;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function TextField2({ label, placeholder, type = "text", value, onChange }: ITextField2Props) {
  return (
    <Styled.Container>
      <Styled.Label>{label}</Styled.Label>
      <Styled.Input type={type} value={value} placeholder={placeholder} onChange={onChange} />
    </Styled.Container>
  );
}
export default TextField2;
