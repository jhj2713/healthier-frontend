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
  padding-top: 2rem;

  height: calc((100vw - 10rem) * 1.096);

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
`;
const ImageBox = styled.section`
  position: absolute;

  width: calc(100vw - 10rem);
`;
const Image = styled.img`
  width: 100%;
`;
const EmptyText = styled(Body_2)`
  color: ${({ theme }) => theme.color.grey_400};

  position: absolute;

  bottom: 0;
  margin-bottom: 6.4rem;
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
        <ImageBox>
          <Image alt="empty" src="/images/mainPage/EmptyImage.png" />
        </ImageBox>
        <EmptyText>진단 내역이 없어요</EmptyText>
      </EmptyContainer>
    </>
  );
};

export default EmptyPage;
