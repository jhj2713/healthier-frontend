import styled from "styled-components";
import LifeComponent from "./LifeComponent";
import Title from "../common/Title";
import { ILifeProps } from "../../../interfaces/resultPage";

const Container = styled.section`
  padding-top: 5.6rem;
  padding-bottom: 13rem;
`;
const TitleBox = styled.section`
  margin: 2rem 2.4rem;

  width: calc(100vw - 4.8rem);
`;

// 뇌증상
const selectedType = ["62cd703fe49face142d9cffe"];

const LifePage = ({
  lifestyle,
  type,
}: {
  lifestyle: ILifeProps[];
  type: string;
}) => {
  return (
    <Container>
      <TitleBox>
        <Title
          text={`생활습관으로\n증상을 ${
            selectedType.includes(type) ? "예방" : "개선"
          }해보아요`}
        />
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
