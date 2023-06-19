import { Heading_3 } from "src/lib/fontStyle";
import styled from "styled-components";

export const ButtonBackground = styled.section`
  width: 100%;

  position: fixed;
  bottom: 0;
  left: 0;
  font-size: 1.3rem;
  box-sizing: border-box;

  padding: 10.4rem 2rem 3rem 2rem;

  background: linear-gradient(180deg, rgba(19, 20, 22, 0) 0%, rgba(19, 20, 22, 0.947917) 78.12%, #131416 100%);

  pointer-events: none;

  .button-box {
    pointer-events: auto;
    display: flex;
    justify-content: center;
  }
`;

export const Title = styled(Heading_3)`
  color: ${({ theme }) => theme.color.grey_200};

  padding-top: 4rem;
`;
