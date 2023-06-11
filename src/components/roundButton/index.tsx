import { memo } from "react";
import { Container, ButtonText } from "./index.style";

export interface IRoundButton {
  outline: string;
  backgroundColor: string;
  color: string;
  children: string;
}

const RoundButton = ({ outline, backgroundColor, color, children }: IRoundButton) => {
  return (
    <Container backgroundColor={backgroundColor} outline={outline}>
      <ButtonText color={color}>{children}</ButtonText>
    </Container>
  );
};

export default memo(RoundButton);
