import styled from "styled-components";

export const BottomContainer = styled.section<{ curIndex: number }>`
  z-index: 5;

  position: fixed;
  bottom: 0;
  width: calc(var(--vw, 1vw) * 100);

  padding-top: 12rem;
  padding-bottom: 4rem;

  background: linear-gradient(180deg, rgba(19, 20, 22, 0) 0%, rgba(19, 20, 22, 0.947917) 78.12%, #131416 100%);

  pointer-events: none;
`;

export const BottomButton = styled.section`
  z-index: 5;

  position: fixed;
  margin: 0 2rem;
  bottom: 3rem;

  pointer-events: auto;
`;
