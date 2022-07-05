import styled from "styled-components";
import LifeComponent from "./LifeComponent";
import Title from "../common/Title";
import { ILifeProps } from "../../../interfaces/resultPage";

const Container = styled.section`
  padding-top: 9.6rem;
  padding-bottom: 12rem;
`;
const Contents = styled.section``;
const TitleBox = styled.section`
  margin: 2rem 2.4rem;

  width: calc(100vw - 4.8rem);
`;

const LifePage = ({ lifestyle }: { lifestyle: ILifeProps[] }) => {
  return (
    <Container>
      <Contents>
        <TitleBox>
          <Title highlight="생활습관" text={"으로\n증상을 개선해보아요"} />
        </TitleBox>
        {lifestyle.map((life, idx) => (
          <LifeComponent
            key={idx}
            idx={idx}
            icon={life.emoji}
            title={life.title}
            content={life.detail}
          />
        ))}
      </Contents>
    </Container>
  );
};

export default LifePage;
