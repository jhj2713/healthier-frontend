import styled from "styled-components";
import { Heading_3 } from "src/lib/fontStyle";

export const ButtonBackground = styled.section`
  position: fixed;
  bottom: 0;
  margin: 0 2rem;
  font-size: 1.3rem;

  padding-top: 10.4rem;
  padding-bottom: 3rem;

  background: linear-gradient(180deg, rgba(19, 20, 22, 0) 0%, rgba(19, 20, 22, 0.947917) 78.12%, #131416 100%);

  pointer-events: none;

  .button-box {
    pointer-events: auto;
  }
`;

export const Title = styled(Heading_3)`
  color: ${({ theme }) => theme.color.grey_200};

  padding-top: 4rem;
`;

export const Contents = styled.section`
  margin: 0 2.4rem 15rem 2.4rem;
  padding-top: 5.6rem;

  height: (var(--vh, 1vh) * 100);
`;
