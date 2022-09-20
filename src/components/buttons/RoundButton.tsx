import styled from "styled-components";
import { IButton } from "../../interfaces/component";

const Container = styled.section<{
  backgroundColor: string;
  outline: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: calc(var(--vw, 1vw) * 100 - 4rem);
  height: 5.2rem;

  background: ${({ backgroundColor }) => backgroundColor};

  border: ${({ outline }) => outline !== "none" && `0.1rem solid ${outline}`};
  border-radius: 3rem;
  box-sizing: border-box;
  cursor: pointer;
`;
const ButtonText = styled.section<{ color: string }>`
  color: ${({ color }) => color};

  font-size: 1.6rem;
  font-weight: 300;
  line-height: 150%;

  text-align: center;
`;

const RoundButton = ({ outline, backgroundColor, color, text }: IButton) => {
  return (
    <Container backgroundColor={backgroundColor} outline={outline}>
      <ButtonText color={color}>{text}</ButtonText>
    </Container>
  );
};

export default RoundButton;
