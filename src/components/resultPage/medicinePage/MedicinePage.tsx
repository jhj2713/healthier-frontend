import styled from "styled-components";
import BottomNumber from "../common/BottomNumber";
import Title from "../common/Title";
import Tooltip from "./Tooltip";

const Container = styled.section``;
const Contents = styled.section`
  margin: 4rem 2.4rem 0 2.4rem;
`;
const BottomBox = styled.section`
  position: absolute;
  bottom: 0;

  margin-bottom: 4.8rem;
`;
const Description = styled.section`
  font-size: 1.4rem;
  line-height: 150%;

  color: ${({ theme }) => theme.color.grey_300};

  margin-top: 0.8rem;
`;
const TooltipContainer = styled.section`
  margin-top: 12.8rem;
`;

const MedicinePage = () => {
  return (
    <Container>
      <Contents>
        <Title highlight="" text="증상에 맞는 약을 추천해 드려요" />
        <Description>해당 의약품은 처방없이 구매할 수 있어요</Description>
        <TooltipContainer>
          <Tooltip />
        </TooltipContainer>
      </Contents>
      <BottomBox>
        <BottomNumber curNum={4} />
      </BottomBox>
    </Container>
  );
};

export default MedicinePage;
