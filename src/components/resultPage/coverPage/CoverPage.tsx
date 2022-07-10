import styled from "styled-components";
import { ICoverPageProps } from "../../../interfaces/resultPage";
import { Body_2, Body_4, Heading_1 } from "../../../lib/fontStyle";
import SeverityBar from "./SeverityBar";

const Container = styled.section``;
const CoverImage = styled.section``;
const Contents = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 4.6rem;
  padding-bottom: 12rem;
`;
const SeverityText = styled(Body_2)`
  color: ${({ theme }) => theme.color.green};

  margin-bottom: 1rem;
`;
const Title = styled(Heading_1)`
  color: ${({ theme }) => theme.color.grey_100};

  margin-bottom: 1.6rem;
`;
const Description = styled(Body_4)`
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
        <SeverityBar severity={severity} />
      </Contents>
    </Container>
  );
};

export default CoverPage;
