import styled from "styled-components";
import LifeComponent from "./LifeComponent";
import Title from "../common/Title";

const Container = styled.section`
  padding-top: 9.6rem;
`;
const Contents = styled.section`
  margin: 3.4rem 0 2rem 2.4rem;

  width: calc(100vw - 4.8rem);
`;

const life_arr = [
  {
    icon: "⏰",
    title: "일정한 시각에 일어나세요",
    contents:
      "수면-각성 리듬을 일정하게 유지하기 위해 일정한 시간에 자는 것보다 일정한 시간에 일어나는 것이 더 중요해요.",
  },
  {
    icon: "☕️",
    title: "오전 10시 이후 카페인 삼가기",
    contents:
      "카페인의 각성효과가 14시간까지 지속되므로 아침 10시 이후에는 카페인 섭취를 삼가세요.",
  },
  {
    icon: "🍷",
    title: "알코올 삼가기",
    contents:
      "알코올은 수면유도효과가 있으나 신경을 각성시켜 수면 유지에 문제가 생겨 새벽에 깨게 되어요.",
  },
];

const LifePage = () => {
  return (
    <Container>
      <Contents>
        <Title highlight="생활습관" text={"으로\n증상을 개선해보아요"} />
      </Contents>
      {life_arr.map((life, idx) => (
        <LifeComponent
          key={idx}
          idx={idx}
          icon={life.icon}
          title={life.title}
          content={life.contents}
        />
      ))}
    </Container>
  );
};

export default LifePage;
