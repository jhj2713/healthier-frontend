import styled from "styled-components";
import BottomNumber from "./common/BottomNumber";

const Container = styled.section`
  color: ${({ theme }) => theme.color.grey_100};
`;
const BottomBox = styled.section`
  position: absolute;
  bottom: 0;

  margin-bottom: 4.8rem;
`;

const CoverPage = () => {
  return (
    <Container>
      커버페이지
      <BottomBox>
        <BottomNumber curNum={1} />
      </BottomBox>
    </Container>
  );
};

export default CoverPage;
