import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 6.8rem;
  width: 100%;

  gap: 1.2rem;
`;

export const Button = styled.button<{ isSelected: boolean }>`
  width: 100%;
  padding: 1.4rem 0;

  border: 1px solid ${({ isSelected, theme }) => (isSelected ? theme.color.sub_blue : theme.color.grey_650)};
  border-radius: 3rem;

  background: ${({ isSelected, theme }) => (isSelected ? theme.color.sub_blue : "transparent")};
  color: ${({ isSelected, theme }) => (isSelected ? theme.color.blue : theme.color.grey_300)};

  font-size: 1.6rem;
  font-weight: ${({ isSelected }) => (isSelected ? 300 : 200)};
  line-height: 150%;

  cursor: pointer;
`;
