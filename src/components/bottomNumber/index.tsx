import { IBottomNumber } from "src/interfaces/resultPage";
import { Container, Number } from "./index.style";

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
