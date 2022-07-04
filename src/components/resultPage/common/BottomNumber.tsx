import styled from "styled-components";

const Container = styled.section`
  display: flex;
  margin-left: calc((100vw - 16.2rem) / 2);
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

const number = Array.from(Array(5).keys()).map((y) => y + 1);

const BottomNumber = ({ curNum }: { curNum: number }) => {
  return (
    <Container>
      {number.map((n) => (
        <Number key={n} curNum={curNum} num={n}>
          {n}
        </Number>
      ))}
    </Container>
  );
};

export default BottomNumber;
