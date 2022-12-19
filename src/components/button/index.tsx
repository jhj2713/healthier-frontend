import { IButton } from "../../interfaces/component";
import { Container } from "./index.style";

function Button({ selected, children }: IButton) {
  return <Container selected={selected}>{children}</Container>;
}

export default Button;
