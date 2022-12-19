import { Container, ButtonText } from "./index.style";
import { IRoundButton } from "../../interfaces/component";

const RoundButton = ({ outline, backgroundColor, color, children }: IRoundButton) => {
  return (
    <Container backgroundColor={backgroundColor} outline={outline}>
      <ButtonText color={color}>{children}</ButtonText>
    </Container>
  );
};

export default RoundButton;
