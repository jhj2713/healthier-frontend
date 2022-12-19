import { ICoverPageProps } from "src/interfaces/resultPage";
import SeverityBar from "../severityBar";
import { Container, CoverImage, Contents, SeverityText, Title, Description } from "./index.style";

const CoverPage = ({ coverData: { illustration, highlight, title, description, severity } }: { coverData: ICoverPageProps }) => {
  return (
    <Container>
      <CoverImage loading="eager" alt="cover" src={illustration} />

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
