import styled from "styled-components";

export const Container = styled.div<{ padding: string }>`
  position: relative;
  top: 5.6rem;

  height: calc(var(--vh) * 100 - 5.6rem);
  padding: ${({ padding }) => padding};
`;
