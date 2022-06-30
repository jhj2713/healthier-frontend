import styled from "styled-components";
import RectButton from "../buttons/RectButton";
import theme from "../../lib/theme";
import { useState } from "react";

const Container = styled.section`
  margin: 3.2rem 2.6rem 0 2.4rem;
`;
const GenderContainer = styled.section`
  display: flex;

  font-size: 1.3rem;
`;
const Title = styled.section`
  color: ${({ theme }) => theme.color.grey_300};
  font-size: 1.3rem;

  margin-bottom: 0.8rem;
`;
const GenderButton = styled.section`
  width: calc(100vw - 5.8rem);
  & + & {
    margin-left: 1rem;
  }
`;

const Gender = () => {
  const [gender, setGender] = useState("");

  return (
    <Container>
      <Title>성별</Title>
      <GenderContainer>
        <GenderButton onClick={() => setGender("m")}>
          <RectButton
            outline={gender === "m" ? "none" : theme.color.grey_600}
            backgroundColor={
              gender === "m" ? theme.color.sub_blue : "transparent"
            }
            color={gender === "m" ? theme.color.blue : theme.color.grey_600}
            text="남성"
          />
        </GenderButton>
        <GenderButton onClick={() => setGender("f")}>
          <RectButton
            outline={gender === "f" ? "none" : theme.color.grey_600}
            backgroundColor={
              gender === "f" ? theme.color.sub_blue : "transparent"
            }
            color={gender === "f" ? theme.color.blue : theme.color.grey_600}
            text="여성"
          />
        </GenderButton>
      </GenderContainer>
    </Container>
  );
};

export default Gender;
