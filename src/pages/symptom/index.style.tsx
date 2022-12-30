import styled from "styled-components";

export const Container = styled.section`
  width: calc(var(--vw, 1vw) * 100);
  height: calc(var(--vh, 1vh) * 100);

  background: #0c0d10;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CanvasSection = styled.div`
  width: calc(var(--vw, 1vw) * 100);
  height: calc(var(--vh, 1vh) * 100);

  z-index: 0;
  position: absolute;

  background: ${({ theme }) => theme.color.grey_900};
`;
