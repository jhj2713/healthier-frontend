import React from "react";
import styled from "styled-components";
import Tag from "../tags/Tag";
import { ITagsProps } from "../../interfaces/informationPage";
import { Body_4, Description } from "../../lib/fontStyle";

const Container = styled.section`
  margin-top: 3.2rem;
`;
const Title = styled(Body_4)`
  color: ${({ theme }) => theme.color.grey_300};
`;
const TagContainer = styled.section`
  display: -webkit-flexbox;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
`;
const TagBox = styled.section`
  margin-top: 0.8rem;
  margin-right: 0.8rem;
`;
const DescriptionBox = styled(Description)`
  color: ${({ theme }) => theme.color.grey_500};

  font-size: 1.4rem;
  margin-top: 1.6rem;
`;

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
