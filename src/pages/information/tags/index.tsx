import React, { memo } from "react";
import Tag from "src/components/tag";
import { ITagsProps } from "src/interfaces/informationPage";
import { Container, TagContainer, TagBox, Title, DescriptionBox } from "./index.style";

const Tags = ({ health, setHealth }: ITagsProps) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    let newHealthArr = health.map((heal) => (heal.name === target.innerHTML ? { ...heal, selected: !heal.selected } : heal));
    const count = newHealthArr.filter((heal) => heal.selected).length;
    if (count > 3) newHealthArr = health;
    setHealth(newHealthArr);
  };

  return (
    <Container>
      <Title>관심 건강분야</Title>
      <TagContainer>
        {health.map((heal) => (
          <TagBox className={heal.id.toString()} key={heal.id} onClick={handleClick}>
            <Tag selected={heal.selected}>{heal.name}</Tag>
          </TagBox>
        ))}
      </TagContainer>
      <DescriptionBox>관심 분야는 최대 3개까지 선택 가능합니다.</DescriptionBox>
    </Container>
  );
};

export default memo(Tags);
