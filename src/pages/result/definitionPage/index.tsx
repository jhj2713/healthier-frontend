import Tag from "src/components/tag";
import Title from "src/components/title";
import { IDefinePageProps } from "src/interfaces/resultPage";
import CauseBox from "../causeBox";
import Description from "../description";
import { Container, DescriptionBox, SymptomBox, SymptomTags, SymptomText } from "./index.style";

const DefinitionPage = ({ defineData: { title, definition, tag_flag, cause, cause_detail } }: { defineData: IDefinePageProps }) => {
  const tags = ["피로감", "졸림", "불면증"];

  return (
    <Container>
      <section className="contents">
        <Title text={title} />
        <DescriptionBox top={2} bottom={3}>
          {definition.map((text, idx) => (
            <section key={idx}>{text ? <Description text={text} /> : <br />}</section>
          ))}
        </DescriptionBox>
        <SymptomBox>
          <SymptomText>다음과 같은 증상이 나타날 수 있어요</SymptomText>
          <SymptomTags>
            {tags.map((tag, idx) => (
              <Tag key={idx} selected={false}>
                {tag}
              </Tag>
            ))}
          </SymptomTags>
        </SymptomBox>
        <Title text="원인이 무엇인가요?" />
        {cause?.length === 2 && <CauseBox cause_1={cause[0]} cause_2={cause[1]} />}
        <DescriptionBox top={tag_flag === 1 ? 1.6 : 2} bottom={0}>
          {cause_detail.map((text, idx) => (
            <section key={idx}>
              <Description text={text} />
            </section>
          ))}
        </DescriptionBox>
      </section>
    </Container>
  );
};

export default DefinitionPage;
