import styled from "styled-components";

export const Container = styled.section<{ select: boolean }>`
  cursor: pointer;

  height: 14.4rem;
  width: 100%;

  background: ${({ select, theme }) => (select ? theme.color.sub_blue : "transparent")};

  border: ${({ select, theme }) => !select && `0.1rem solid ${theme.color.grey_650}`};
  border-radius: 1rem;
  box-sizing: border-box;

  position: relative;
`;

export const Title = styled.section<{ select: boolean }>`
  font-size: 1.6rem;
  font-weight: 300;
  color: ${({ select, theme }) => (select ? theme.color.blue : theme.color.grey_300)};

  margin-top: 2rem;
  margin-left: 2rem;

  position: absolute;
`;

export const TypeImage = styled.section`
  position: absolute;
  top: 0;
  right: 0;
`;
