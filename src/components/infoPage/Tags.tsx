import React, { useState } from "react";
import styled from "styled-components";
import Tag from "../tags/Tag";

const TagContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TagBox = styled.section`
  font-size: 1.3rem;
`;

const health_arr = [
  { id: 1, name: "금연" },
  { id: 2, name: "금주" },
  { id: 3, name: "노화방지" },
  { id: 4, name: "다이어트" },
  { id: 5, name: "수면" },
  { id: 6, name: "암예방" },
  { id: 7, name: "영양제" },
  { id: 8, name: "건강검진" },
  { id: 9, name: "미용" },
];

const Tags = () => {
  const [select, setSelect] = useState<string[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (select.length < 3) {
      setSelect([...select, target.innerHTML]);
    }
  };

  return (
    <TagContainer>
      {health_arr.map((health) => (
        <TagBox key={health.id} onClick={handleClick}>
          <Tag text={health.name} selected={select.includes(health.name)} />
        </TagBox>
      ))}
    </TagContainer>
  );
};

export default Tags;
