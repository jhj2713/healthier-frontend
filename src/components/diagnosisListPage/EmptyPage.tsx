import styled from "styled-components";
import { Heading_3, Body_2 } from "../../lib/fontStyle";

const Title = styled(Heading_3)`
  color: ${({ theme }) => theme.color.grey_200};

  margin: 4rem 2.4rem 0 2.4rem;
`;
const Highlight = styled.span`
  font-weight: 500;
`;
const EmptyContainer = styled.section`
  padding-top: 12.5rem;
`;
const EmptyText = styled(Body_2)`
  text-align: center;
  color: ${({ theme }) => theme.color.grey_400};
`;

const EmptyPage = () => {
  return (
    <>
      <Title>
        <Highlight>빠른 진단</Highlight>으로
        <br /> 내 몸의 <Highlight>정확한 증상</Highlight>을
        <br />
        알아보세요!
      </Title>
      <EmptyContainer>
        <EmptyText>진단 내역이 없어요</EmptyText>
      </EmptyContainer>
    </>
  );
};

export default EmptyPage;
