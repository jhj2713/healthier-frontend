import { Body_1 } from "src/lib/fontStyle";
import styled from "styled-components";

export const Container = styled.section`
  background: transparent;
  width: 100%;

  margin-bottom: 13rem;
`;

export const NextButton = styled.section`
  width: calc(var(--vw, 1vw) * 100);

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  bottom: 0;
  padding-bottom: 3rem;
  padding-top: 0.6rem;

  background: linear-gradient(180deg, rgba(31, 37, 79, 0) 0%, #23284b 50%);
`;
