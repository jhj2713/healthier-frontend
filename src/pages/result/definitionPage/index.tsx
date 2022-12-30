import Title from "src/components/title";
import Description from "../description";
import CauseBox from "../causeBox";
import { IDefinePageProps } from "src/interfaces/resultPage";
import { Container, DescriptionBox } from "./index.style";

const DefinitionPage = ({ defineData: { title, definition, tag_flag, cause, cause_detail } }: { defineData: IDefinePageProps }) => {
  return (
    <Container>
      <section className="contents">
        <Title text={title} />
        <DescriptionBox top={2} bottom={8}>
          {definition.map((text, idx) => (
            <section key={idx}>{text ? <Description text={text} /> : <br />}</section>
          ))}
        </DescriptionBox>
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
