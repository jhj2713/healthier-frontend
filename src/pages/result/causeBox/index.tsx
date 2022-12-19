import { ICauseBox } from "src/interfaces/resultPage";
import { Container, Tag, Description } from "./index.style";

const CauseBox = ({ cause_1, cause_2 }: ICauseBox) => {
  return (
    <Container>
      <section className="tag-box">
        <Tag num={0}>{cause_1.cause}</Tag>
        <section className="cause-detail">
          {cause_1.details.map((cause, idx) => (
            <Description key={idx}>{cause}</Description>
          ))}
        </section>
      </section>
      <section />
      <section className="tag-box">
        <Tag num={1}>{cause_2.cause}</Tag>
        <section className="cause-detail">
          {cause_2.details.map((cause, idx) => (
            <Description key={idx}>{cause}</Description>
          ))}
        </section>
      </section>
    </Container>
  );
};

export default CauseBox;
