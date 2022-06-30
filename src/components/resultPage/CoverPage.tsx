import styled from "styled-components";
import BottomNumber from "./common/BottomNumber";

const Container = styled.section`
  color: ${({ theme }) => theme.color.grey_100};
`;

const CoverPage = () => {
  return (
    <Container>
      커버페이지
      <BottomNumber curNum={1} />
    </Container>
  );
};

export default CoverPage;
