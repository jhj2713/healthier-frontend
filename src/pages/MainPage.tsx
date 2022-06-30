import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import RoundButton from "../components/buttons/RoundButton";
import theme from "../lib/theme";

const Container = styled.main`
  height: inherit;
  color: ${({ theme }) => theme.color.grey_100};
`;
const Title = styled.section`
  font-size: 2.2rem;
  line-height: 150%;

  margin-top: 4rem;
  margin-left: 2.4rem;
`;
const Buttons = styled.section`
  position: absolute;
  bottom: 0;

  display: flex;
  flex-direction: column;

  margin: 7rem 2rem;
`;
const ButtonBox = styled.section`
  & + & {
    margin-top: 1.2rem;
  }
`;
const Highlight = styled.span`
  font-weight: bolder;
`;

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>
        <Highlight>빠른 진단</Highlight>으로
        <br />내 몸의 <Highlight>정확한 증상</Highlight>을
        <br />
        알아보세요!
      </Title>
      <Buttons>
        <ButtonBox onClick={() => navigate("/info")}>
          <RoundButton
            outline="none"
            backgroundColor={theme.color.green}
            color={theme.color.grey_800}
            text={"빠른 진단 시작하기"}
          />
        </ButtonBox>
        <ButtonBox>
          <RoundButton
            outline="none"
            backgroundColor={theme.color.blue}
            color={theme.color.grey_100}
            text={"나의 진단기록장 보기"}
          />
        </ButtonBox>
      </Buttons>
    </Container>
  );
};

export default MainPage;
