import React, { useState } from "react";
import styled from "styled-components";
import Tag from "../tags/Tag";

const Container = styled.section`
  margin-top: 3.2rem;
`;
const Title = styled.section`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.color.grey_300};
`;
const TagContainer = styled.section`
  display: flexbox;

  margin-top: 0.8rem;
`;
const TagBox = styled.section`
  font-size: 1.3rem;
  & + & {
    margin-left: 0.8rem;
  }
`;
const Description = styled.section`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.color.grey_600};

  margin-top: 1.6rem;
`;

const health_arr = [
  { id: 1, name: "금연", selected: false },
  { id: 2, name: "금주", selected: false },
  { id: 3, name: "노화방지", selected: false },
  { id: 4, name: "다이어트", selected: false },
  { id: 5, name: "수면", selected: false },
  { id: 6, name: "암예방", selected: false },
  { id: 7, name: "영양제", selected: false },
  { id: 8, name: "건강검진", selected: false },
  { id: 9, name: "미용", selected: false },
];

const Tags = () => {
  const [health, setHealth] = useState(health_arr);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    let newHealthArr = health.map((health) =>
      health.name === target.innerHTML
        ? { ...health, selected: !health.selected }
        : health
    );
    let count = newHealthArr.filter((health) => health.selected).length;
    if (count > 3) newHealthArr = health;
    setHealth(newHealthArr);
  };

  return (
    <Container>
      <Title>관심 건강분야</Title>
      <TagContainer>
        {health.slice(0, 5).map((health) => (
          <TagBox key={health.id} onClick={handleClick}>
            <Tag text={health.name} selected={health.selected} />
          </TagBox>
        ))}
      </TagContainer>
      <TagContainer>
        {health.slice(5).map((health) => (
          <TagBox key={health.id} onClick={handleClick}>
            <Tag text={health.name} selected={health.selected} />
          </TagBox>
        ))}
      </TagContainer>
      <Description>관심 분야는 최대 3개까지 선택 가능합니다.</Description>
    </Container>
  );
};

export default Tags;
