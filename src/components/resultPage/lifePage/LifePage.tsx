import styled from "styled-components";
import LifeComponent from "./LifeComponent";
import Title from "../common/Title";
import { ILifeProps } from "../../../interfaces/resultPage";
import preventionTypes from "../../../store/prevention_types";

const Container = styled.section`
  padding-top: 5.6rem;
  padding-bottom: 13rem;
`;
const TitleBox = styled.section`
  margin: 2rem 2.4rem;

  width: calc(var(--vw, 1vw) * 100 - 4.8rem);
`;

const LifePage = ({ lifestyle, type }: { lifestyle: ILifeProps[]; type: string }) => {
  return (
    <Container>
      <TitleBox>
        <Title text={`생활습관으로\n증상을 ${preventionTypes.includes(type) ? "예방" : "개선"}해보아요`} />
      </TitleBox>
      {lifestyle.map((life, idx) => (
        <LifeComponent key={idx} idx={idx} icon={life.emoji} title={life.title} content={life.detail} />
      ))}
    </Container>
  );
};

export default LifePage;
