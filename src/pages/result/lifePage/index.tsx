import Title from "src/components/title";
import { ILifeProps } from "src/interfaces/resultPage";
import LifeComponent from "../lifeComponent";
import { Container } from "./index.style";

const LifePage = ({ lifestyle }: { lifestyle: ILifeProps[] }) => {
  return (
    <Container>
      <section className="title-box">
        <Title text={`생활습관으로\n증상을 개선해보아요`} />
      </section>
      {lifestyle.map((life, idx) => (
        <LifeComponent key={idx} idx={idx} icon={life.emoji} title={life.title} content={life.detail} />
      ))}
    </Container>
  );
};

export default LifePage;
