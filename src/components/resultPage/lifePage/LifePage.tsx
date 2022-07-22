import styled from "styled-components";
import LifeComponent from "./LifeComponent";
import Title from "../common/Title";
import { ILifeProps } from "../../../interfaces/resultPage";

const Container = styled.section`
  padding-top: 9.6rem;
  padding-bottom: 13rem;
`;
const TitleBox = styled.section`
  margin: 2rem 2.4rem;

  width: calc(100vw - 4.8rem);
`;

const LifePage = ({ lifestyle }: { lifestyle: ILifeProps[] }) => {
  return (
    <Container>
      <TitleBox>
        {/* 뇌증상은 예방으로 수정 */}
        <Title text={"생활습관으로\n증상을 개선해보아요"} />
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
    </Container>
  );
};

export default LifePage;
