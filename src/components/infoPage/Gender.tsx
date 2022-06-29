import styled from "styled-components";
import RectButton from "../buttons/RectButton";
import theme from "../../lib/theme";

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.3rem;

  margin: 2rem;
`;

const Gender = () => {
  return (
    <Container>
      <RectButton
        outline="none"
        backgroundColor={theme.color.sub_blue}
        color={theme.color.blue}
        text="여성"
      />
      <RectButton
        outline={theme.color.grey_600}
        backgroundColor="transparent"
        color={theme.color.grey_600}
        text="남성"
      />
    </Container>
  );
};

export default Gender;
