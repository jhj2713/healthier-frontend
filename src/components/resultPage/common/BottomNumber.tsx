import styled from "styled-components";
import { IBottomNumber } from "../../../interfaces/resultPage";

const Container = styled.section`
  display: flex;
  justify-content: center;
`;
const Number = styled.section<{ curNum: number; num: number }>`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  width: 2.6rem;
  height: 2.6rem;

  background-color: ${({ theme, curNum, num }) =>
    curNum === num ? theme.color.sub_blue : theme.color.grey_650};
  color: ${({ theme, curNum, num }) =>
    curNum === num ? theme.color.blue : theme.color.grey_300};

  font-size: 1.2rem;
  font-weight: 200;

  & + & {
    margin-left: 0.8rem;
  }
`;

const BottomNumber = ({ curIndex, totalCount }: IBottomNumber) => {
  const number = Array.from(Array(totalCount).keys()).map((y) => y + 1);

  return (
    <Container>
      {number.map((n) => (
        <Number key={n} curNum={curIndex} num={n}>
          {n}
        </Number>
      ))}
    </Container>
  );
};

export default BottomNumber;
