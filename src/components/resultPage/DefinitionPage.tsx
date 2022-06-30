import styled from "styled-components";
import BottomNumber from "./common/BottomNumber";

const Container = styled.section`
  color: ${({ theme }) => theme.color.grey_100};
`;

const DefinitionPage = () => {
  return (
    <Container>
      정의
      <BottomNumber curNum={2} />
    </Container>
  );
};

export default DefinitionPage;
