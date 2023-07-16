import React, { memo } from "react";
import Tag from "src/components/tag";
import { HEALTH_INTERESTS } from "src/data/interest";
import { ITagsProps } from "src/interfaces/informationPage";
import { Container, TagContainer, TagBox, Title } from "./index.style";

const Tags = ({ interests, setInterests }: ITagsProps) => {
  const handleClickTag = (interestId: number) => {
    if (interests.includes(interestId)) {
      setInterests((i) => i.filter((id) => id !== interestId));

      return;
    }

    setInterests([...interests, interestId]);
  };

  return (
    <Container>
      <Title>관심 건강분야</Title>
      <TagContainer>
        {HEALTH_INTERESTS.map((heal) => (
          <TagBox className={heal.id.toString()} key={heal.id} onClick={() => handleClickTag(heal.id)}>
            <Tag selected={interests.includes(heal.id)}>{heal.name}</Tag>
          </TagBox>
        ))}
      </TagContainer>
    </Container>
  );
};

export default memo(Tags);
