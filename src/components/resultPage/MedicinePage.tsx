import styled from "styled-components";
import BottomNumber from "./common/BottomNumber";

const Container = styled.section``;

const MedicinePage = () => {
  return (
    <Container>
      약
      <BottomNumber curNum={4} />
    </Container>
  );
};

export default MedicinePage;
