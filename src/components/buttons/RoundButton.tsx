import styled from "styled-components";
import { IButton } from "../../interfaces/component";

const Container = styled.section<{
  backgroundColor: string;
  outline: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: calc(100vw - 4rem);
  height: 5.2rem;

  background-color: ${({ backgroundColor }) => backgroundColor};

  border: ${({ outline }) => outline !== "none" && "0.1rem solid " + outline};
  border-radius: 3rem;
  box-sizing: border-box;
`;
const ButtonText = styled.section<{ color: string }>`
  color: ${({ color }) => color};
`;

const RoundButton = ({ outline, backgroundColor, color, text }: IButton) => {
  return (
    <Container backgroundColor={backgroundColor} outline={outline}>
      <ButtonText color={color}>{text}</ButtonText>
    </Container>
  );
};

export default RoundButton;
