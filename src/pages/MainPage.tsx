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
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 1.6rem;
`;
const ButtonBox = styled.section`
  & + & {
    margin-top: 1.2rem;
  }
`;

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>
        <strong>빠른 진단</strong>으로
        <br />내 몸의 <strong>정확한 증상</strong>을
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
