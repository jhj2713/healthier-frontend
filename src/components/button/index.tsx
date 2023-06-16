import { HTMLAttributes } from "react";
import { Container } from "./index.style";

export interface IButton extends HTMLAttributes<HTMLDivElement> {
  selected: boolean;
  children: string;
}

function Button({ selected, children, ...props }: IButton) {
  return (
    <Container selected={selected} {...props}>
      {children}
    </Container>
  );
}

export default Button;
