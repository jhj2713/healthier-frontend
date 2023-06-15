import { memo } from "react";
import { CSSProperties } from "styled-components";
import { Container, ButtonText } from "./index.style";

export interface IRoundButton {
  outline: string;
  backgroundColor: string;
  color: string;
  children: string;
  style?: CSSProperties;
}

const RoundButton = ({ outline, backgroundColor, color, children, style }: IRoundButton) => {
  return (
    <Container backgroundColor={backgroundColor} outline={outline} style={style}>
      <ButtonText color={color}>{children}</ButtonText>
    </Container>
  );
};

export default memo(RoundButton);
