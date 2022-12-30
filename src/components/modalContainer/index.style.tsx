import styled from "styled-components";

export const Wrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.6);

  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.section`
  position: relative;

  width: calc(var(--vw, 1vw) * 100 - 4rem);
  height: 48.2rem;

  border-radius: 0.8rem;

  background: radial-gradient(181.28% 184.02% at -58.92% 120.58%, rgba(210, 250, 100, 0.9) 0%, rgba(84, 100, 243, 0) 100%), #5464f2;
`;
