import styled from "styled-components";

export const Container = styled.div<{ padding: string }>`
  position: relative;
  top: 5.6rem;

  height: calc(100vh - 5.6rem);
  padding: ${({ padding }) => padding};
`;
