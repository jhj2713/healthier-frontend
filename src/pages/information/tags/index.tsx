import React from "react";
import Tag from "../../../components/tags/Tag";
import { ITagsProps } from "../../../interfaces/informationPage";
import { Container, TagContainer, TagBox, Title, DescriptionBox } from "./index.style";

const Tags = ({ health, setHealth }: ITagsProps) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    let newHealthArr = health.map((health) => (health.name === target.innerHTML ? { ...health, selected: !health.selected } : health));
    let count = newHealthArr.filter((health) => health.selected).length;
    if (count > 3) newHealthArr = health;
    setHealth(newHealthArr);
  };

  return (
    <Container>
      <Title>관심 건강분야</Title>
      <TagContainer>
        {health.map((health) => (
          <TagBox className={health.id.toString()} key={health.id} onClick={handleClick}>
            <Tag text={health.name} selected={health.selected} />
          </TagBox>
        ))}
      </TagContainer>
      <DescriptionBox>관심 분야는 최대 3개까지 선택 가능합니다.</DescriptionBox>
    </Container>
  );
};

export default Tags;
