import React from "react";
import styled from "styled-components";
import Tag from "../tags/Tag";
import { ITagsProps } from "../../interfaces/informationPage";

const Container = styled.section`
  margin-top: 3.2rem;
`;
const Title = styled.section`
  font-size: 1.3rem;
  font-weight: 100;
  line-height: 150%;
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
  font-size: 1.3rem;
  margin-top: 0.8rem;
  margin-right: 0.8rem;
`;
const Description = styled.section`
  font-size: 1.2rem;
  font-weight: 100;
  line-height: 150%;
  color: ${({ theme }) => theme.color.grey_600};

  margin-top: 1.6rem;
`;

const Tags = ({ health, setHealth }: ITagsProps) => {
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
        {health.map((health) => (
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
