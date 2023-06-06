import Tag from "src/components/tag";
import { ICoverPageProps } from "src/interfaces/resultPage";
import SeverityBar from "../severityBar";
import { Container, CoverImage, Contents, SeverityText, Title, Description, TagContainer } from "./index.style";

const CoverPage = ({ coverData: { illustration, highlight, title, description, severity } }: { coverData: ICoverPageProps }) => {
  const tags = ["신경과", "정신건강의학과"];

  return (
    <Container>
      <CoverImage loading="eager" alt="cover" src={illustration} />

      <Contents>
        <SeverityText>{highlight}</SeverityText>
        <Title>{title}</Title>
        {description.map((des, idx) => (
          <Description key={idx}>{des}</Description>
        ))}
        <TagContainer>
          {tags.map((tag, idx) => (
            <Tag key={idx} selected={false}>
              {tag}
            </Tag>
          ))}
        </TagContainer>
      </Contents>
      <SeverityBar severity={severity} />
    </Container>
  );
};

export default CoverPage;
