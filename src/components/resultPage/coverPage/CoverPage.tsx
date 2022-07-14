import styled from "styled-components";
import { ICoverPageProps } from "../../../interfaces/resultPage";
import { Body_2, Body_4, Heading_1 } from "../../../lib/fontStyle";
import SeverityBar from "./SeverityBar";

const Container = styled.section`
  padding-bottom: 13rem;
`;
const CoverImage = styled.section`
  height: 36.3rem;
`;
const Contents = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 4.7rem 3.2rem 0 3.2rem;
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

  margin-bottom: 2.4rem;
`;

const CoverPage = ({
  coverData: { illustration, highlight, title, description, severity },
}: {
  coverData: ICoverPageProps;
}) => {
  return (
    <Container>
      <CoverImage>
        <img loading="lazy" alt="cover" src={illustration} height={363} />
      </CoverImage>
      <Contents>
        <SeverityText>{highlight}</SeverityText>
        <Title>{title}</Title>
        {description.map((des, idx) => (
          <Description key={idx}>{des}</Description>
        ))}
      </Contents>
      <SeverityBar severity={severity} />
    </Container>
  );
};

export default CoverPage;
