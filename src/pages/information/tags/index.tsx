import React, { memo } from "react";
import Tag from "src/components/tag";
import { ITagsProps } from "src/interfaces/informationPage";
import { Container, TagContainer, TagBox, Title } from "./index.style";

const Tags = ({ health, setHealth }: ITagsProps) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const newHealthArr = health.map((heal) => (heal.name === target.innerHTML ? { ...heal, selected: !heal.selected } : heal));

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
    </Container>
  );
};

export default memo(Tags);
