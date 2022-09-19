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

  width: calc(var(--vw, 1vw) * 100 - 4.8rem);
`;

// 뇌증상
const selectedType = [
  "62e5283ae39eaf5b29f8adf3",
  "62e5284be39eaf5b29f8adf4",
  "62e5285de39eaf5b29f8adf5",
];

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
