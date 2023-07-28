import theme from "src/lib/theme";
import styled from "styled-components";

export const RootContainer = styled.section`
  position: fixed;
  bottom: 0;
  width: calc(var(--vw, 1vw) * 100);

  padding: 4rem 0;

  display: flex;
  justify-content: center;

  z-index: 5;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.8rem;
`;
export const Button = styled.button<{ isSelected: boolean }>`
  width: 100%;
  height: 100%;

  border: none;
  border-radius: 1.3rem;

  background-color: ${({ isSelected }) => (isSelected ? theme.color.sub_blue : theme.color.grey_700)};
  color: ${({ isSelected }) => (isSelected ? theme.color.blue : theme.color.grey_300)};

  font-size: 1.2rem;
  font-weight: 200;
  line-height: 150%;

  cursor: pointer;
`;
export const ButtonWrapper = styled.div`
  width: 2.6rem;
  height: 2.6rem;
`;
