import styled, { css } from "styled-components";
import { IGenderProps } from "../../interfaces/informationPage";
import { Body_2, Body_4 } from "../../lib/fontStyle";

const Container = styled.section`
  margin-top: 3.2rem;
`;
const GenderContainer = styled.section`
  display: flex;
`;
const Title = styled(Body_4)`
  color: ${({ theme }) => theme.color.grey_300};

  margin-bottom: 0.8rem;
`;
const GenderButton = styled(Body_2)<{
  selected: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 4.8rem;
  width: calc(100vw - 5.8rem);
  font-weight: 200;

  cursor: pointer;

  & + & {
    margin-left: 1rem;
  }

  ${({ selected }) =>
    selected
      ? css`
          background-color: ${({ theme }) => theme.color.sub_blue};
          color: ${({ theme }) => theme.color.blue};
        `
      : css`
          background-color: transparent;
          color: ${({ theme }) => theme.color.grey_600};
          border: 0.1rem solid ${({ theme }) => theme.color.grey_600};
        `}

  border-radius: 0.8rem;
  box-sizing: border-box;
`;

const Gender = ({ gender, setGender }: IGenderProps) => {
  return (
    <Container>
      <Title>성별</Title>
      <GenderContainer>
        <GenderButton onClick={() => setGender("m")} selected={gender === "m"}>
          남성
        </GenderButton>
        <GenderButton onClick={() => setGender("f")} selected={gender === "f"}>
          여성
        </GenderButton>
      </GenderContainer>
    </Container>
  );
};

export default Gender;
