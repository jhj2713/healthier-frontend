import styled from "styled-components";
import RectButton from "../buttons/RectButton";
import theme from "../../lib/theme";
import { IGenderProps } from "../../interfaces/informationPage";
import { Body_4 } from "../../lib/fontStyle";

const Container = styled.section`
  margin-top: 3.2rem;
`;
const GenderContainer = styled.section`
  display: flex;

  font-size: 1.3rem;
`;
const Title = styled(Body_4)`
  color: ${({ theme }) => theme.color.grey_300};

  margin-bottom: 0.8rem;
`;
const GenderButton = styled(Body_4)`
  width: calc(100vw - 5.8rem);
  font-weight: 200;

  cursor: pointer;

  & + & {
    margin-left: 1rem;
  }
`;

const Gender = ({ gender, setGender }: IGenderProps) => {
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
