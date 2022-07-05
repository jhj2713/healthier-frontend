import styled from "styled-components";
import { ICoverPageProps } from "../../../interfaces/resultPage";
import SeverityBar from "./SeverityBar";

const Container = styled.section``;
const CoverImage = styled.section``;
const Contents = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 4.6rem;
  padding-bottom: 12rem;

  word-break: keep-all;
`;
const SeverityText = styled.section`
  font-size: 1.5rem;
  line-height: 150%;
  font-weight: 100;

  color: ${({ theme }) => theme.color.green};

  margin-bottom: 1rem;
`;
const Title = styled.section`
  font-size: 2.8rem;
  line-height: 140%;

  color: ${({ theme }) => theme.color.grey_100};

  font-weight: 300;

  margin-bottom: 1.6rem;
`;
const Description = styled.section`
  font-size: 1.3rem;
  line-height: 150%;
  font-weight: 100;

  color: ${({ theme }) => theme.color.grey_200};

  text-align: center;

  width: 20rem;
`;

const CoverPage = ({
  coverData: { illustration, highlight, title, description, severity },
}: {
  coverData: ICoverPageProps;
}) => {
  return (
    <Container>
      <CoverImage>
        <img alt="cover" src={illustration} />
      </CoverImage>
      <Contents>
        <SeverityText>{highlight}</SeverityText>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <SeverityBar severity={(severity - 1) * 50} />
      </Contents>
    </Container>
  );
};

export default CoverPage;
