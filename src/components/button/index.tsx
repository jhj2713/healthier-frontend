import { Container } from "./index.style";

export interface IButton {
  selected: boolean;
  children: string;
}

function Button({ selected, children }: IButton) {
  return <Container selected={selected}>{children}</Container>;
}

export default Button;
