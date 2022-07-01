import styled from "styled-components";

const Container = styled.section`
  margin-top: 1.8rem;
  margin-bottom: 2.8rem;
`;
const TextBox = styled.section`
  display: flex;
  justify-content: space-between;
`;
const Text = styled.section`
  font-size: 1.4rem;

  color: ${({ theme }) => theme.color.grey_400};
`;
const Background = styled.section`
  margin-top: 1rem;

  background-color: rgba(84, 100, 242, 0.33);

  width: 26.7rem;
  height: 0.5rem;
`;
const Highlight = styled.section`
  position: relative;

  height: 100%;
  width: 50%;

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

const SeverityBar = () => {
  return (
    <Container>
      <TextBox>
        <Text>일시적</Text>
        <Text>보통</Text>
        <Text>심각</Text>
      </TextBox>
      <Background>
        <Highlight>
          <Knob></Knob>
        </Highlight>
      </Background>
    </Container>
  );
};

export default SeverityBar;
