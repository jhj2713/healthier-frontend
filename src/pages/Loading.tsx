import styled from "styled-components";
import { Heading_3, Body_1, Body_3 } from "../lib/fontStyle";

const Container = styled.section`
  width: 100vw;
  height: 100vh;

  background: radial-gradient(
      300.02% 130.63% at 164.62% 165.58%,
      rgba(84, 100, 242, 0.9) 0%,
      rgba(52, 62, 135, 0) 100%
    ),
    #131416;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Highlight = styled.span`
  font-weight: 300;
`;
const Title = styled(Heading_3)`
  width: 27rem;

  font-weight: 200;
  text-align: center;
  word-break: keep-all;
  color: ${({ theme }) => theme.color.grey_200};
`;
const Icon = styled.section`
  width: 21.8rem;
  height: 21.8rem;

  margin: 3.1rem 0;
`;
const BottomTextBox = styled.section`
  text-align: center;
`;
const Tips = styled(Body_3)`
  font-weight: 200;

  color: ${({ theme }) => theme.color.grey_300};
`;
const Description = styled(Body_1)`
  margin-top: 0.8rem;

  width: 17.2rem;

  color: ${({ theme }) => theme.color.grey_400};
`;

const Loading = () => {
  return (
    <Container>
      <Title>
        <Highlight>정확한 증상 진단</Highlight>을 위해 헬시어가 증상을
        분석중이에요
      </Title>
      <Icon></Icon>
      <BottomTextBox>
        <Tips>Tips</Tips>
        <Description>로그인을 하면 진단내역을 모아 볼 수 있어요!</Description>
      </BottomTextBox>
    </Container>
  );
};

export default Loading;
