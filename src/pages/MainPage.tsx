import styled from "styled-components";
import RoundButton from "../components/buttons/RoundButton";
import theme from "../lib/theme";

const Container = styled.div`
  color: ${({ theme }) => theme.color.grey_100};
  font-size: 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainPage = () => {
  return (
    <Container>
      <RoundButton
        outline="transparent"
        backgroundColor={theme.color.green}
        color={theme.color.grey_800}
        text={"빠른 진단 시작하기"}
      />
      <RoundButton
        outline="transparent"
        backgroundColor={theme.color.blue}
        color={theme.color.grey_100}
        text={"나의 진단기록장 보기"}
      />
    </Container>
  );
};

export default MainPage;
