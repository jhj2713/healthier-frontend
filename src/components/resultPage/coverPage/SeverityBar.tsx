import styled from "styled-components";

const Container = styled.section`
  margin-top: 2.4rem;
`;
const TextBox = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  font-weight: 100;
`;
const Text = styled.section<{ align: string }>`
  font-size: 1.4rem;

  color: ${({ theme }) => theme.color.grey_400};
  text-align: ${({ align }) => align};
`;
const Background = styled.section`
  margin-top: 1rem;

  background-color: rgba(84, 100, 242, 0.33);

  width: 26.7rem;
  height: 0.5rem;
`;
const Highlight = styled.section<{ severity: number }>`
  position: relative;

  height: 100%;
  width: ${({ severity }) => severity}%;

  background-color: ${({ theme }) => theme.color.blue};
`;
const Knob = styled.section`
  position: absolute;

  width: 1.2rem;
  height: 1.2rem;

  border-radius: 50%;

  right: -0.6rem;
  top: -0.4rem;

  background-color: ${({ theme }) => theme.color.blue};
`;

const SeverityBar = ({ severity }: { severity: number }) => {
  return (
    <Container>
      <TextBox>
        <Text align="left">일시적</Text>
        <Text align="center">보통</Text>
        <Text align="right">심각</Text>
      </TextBox>
      <Background>
        <Highlight severity={severity}>
          <Knob></Knob>
        </Highlight>
      </Background>
    </Container>
  );
};

export default SeverityBar;
