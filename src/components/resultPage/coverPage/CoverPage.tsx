import styled from "styled-components";
import SeverityBar from "./SeverityBar";

const Container = styled.section``;
const CoverImage = styled.section`
  height: 36.3rem;
  width: 55.1rem;
`;
const Contents = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 4.8rem;
`;
const SeverityText = styled.section`
  font-size: 1.5rem;
  line-height: 150%;

  color: ${({ theme }) => theme.color.green};

  margin-bottom: 0.8rem;
`;
const Title = styled.section`
  font-size: 2.8rem;
  line-height: 140%;

  color: ${({ theme }) => theme.color.grey_100};

  font-weight: bolder;

  margin-bottom: 1.6rem;
`;
const Description = styled.section`
  font-size: 1.3rem;
  line-height: 150%;

  color: ${({ theme }) => theme.color.grey_200};

  text-align: center;

  width: 20rem;
`;
const SlideText = styled.section`
  font-size: 1.2rem;
  line-height: 150%;

  color: ${({ theme }) => theme.color.grey_500};
`;

const CoverPage = () => {
  return (
    <Container>
      <CoverImage>
        <img src="/images/cover.png" />
      </CoverImage>
      <Contents>
        <SeverityText>경과를 지켜봐야하는 증상이에요!</SeverityText>
        <Title>일주기 리듬 수면 장애</Title>
        <Description>
          수면환경을 개선하여 경과를 지켜보고, 증상이 2주 이상 반복될 경우
          수면클리닉에 내원하세요.
        </Description>
        <SeverityBar />
        <SlideText>화면을 슬라이드하여 자세한 결과를 받아보세요!</SlideText>
      </Contents>
    </Container>
  );
};

export default CoverPage;
