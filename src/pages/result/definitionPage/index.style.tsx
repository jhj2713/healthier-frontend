import styled from "styled-components";

export const Container = styled.section`
  padding-top: 5.6rem;
  padding-bottom: 13rem;

  .contents {
    margin: 2rem 2.4rem 0 2.4rem;
    width: calc(var(--vw, 1vw) * 100 - 4.8rem);
  }
`;

export const DescriptionBox = styled.section<{ top: number; bottom: number }>`
  margin-top: ${({ top }) => top}rem;
  margin-bottom: ${({ bottom }) => bottom}rem;
`;
