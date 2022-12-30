import styled from "styled-components";
import { Heading_3 } from "src/lib/fontStyle";

export const Title = styled(Heading_3)`
  font-weight: 200;
  text-align: center;
  word-break: keep-all;
  color: ${({ theme }) => theme.color.grey_200};

  .highlight {
    font-weight: 500;
  }
`;

export const Icon = styled.section`
  width: 26rem;
  height: 24rem;

  margin: 2rem 5rem 8.9rem 5rem;
`;
