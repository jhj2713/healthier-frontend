import { Container, ButtonText } from "./index.style";
import { IRoundButton } from "../../interfaces/component";
import { memo } from "react";

const RoundButton = ({ outline, backgroundColor, color, children }: IRoundButton) => {
  return (
    <Container backgroundColor={backgroundColor} outline={outline}>
      <ButtonText color={color}>{children}</ButtonText>
    </Container>
  );
};

export default memo(RoundButton);
