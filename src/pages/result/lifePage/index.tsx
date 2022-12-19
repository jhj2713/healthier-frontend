import LifeComponent from "../lifeComponent";
import Title from "../../../components/title";
import { ILifeProps } from "../../../interfaces/resultPage";
import preventionTypes from "../../../store/prevention_types";
import { Container } from "./index.style";

const LifePage = ({ lifestyle, type }: { lifestyle: ILifeProps[]; type: string }) => {
  return (
    <Container>
      <section className="title-box">
        <Title text={`생활습관으로\n증상을 ${preventionTypes.includes(type) ? "예방" : "개선"}해보아요`} />
      </section>
      {lifestyle.map((life, idx) => (
        <LifeComponent key={idx} idx={idx} icon={life.emoji} title={life.title} content={life.detail} />
      ))}
    </Container>
  );
};

export default LifePage;
