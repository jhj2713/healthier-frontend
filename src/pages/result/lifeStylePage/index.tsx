import Description from "../lib/description";
import Title from "../lib/Title";
import * as Styled from "./index.style";
import type { TLifestyleData } from "src/interfaces/resultPage";

interface ILifestyleProps {
  data: TLifestyleData;
}

const LifestylePage = ({ data }: ILifestyleProps) => {
  const { lifestyleHabits } = data;

  return (
    <Styled.Container>
      <Title text={"생활습관으로" + "\n" + "증상을 개선해보아요"} style={{ marginTop: "2rem", padding: "0 2.4rem" }} />

      <Styled.LifeStyleList>
        {lifestyleHabits.map(({ title, content, emoji }, idx) => (
          <Styled.LifeStyleItem key={idx} idx={idx}>
            <section className="icon">
              <div>{emoji}</div>
            </section>
            <Styled.Contents>
              <section className="title">{title}</section>
              <Description text={content} />
            </Styled.Contents>
          </Styled.LifeStyleItem>
        ))}
      </Styled.LifeStyleList>
    </Styled.Container>
  );
};

export default LifestylePage;
