import styled from "styled-components";
import { Heading_3, Heading_5 } from "src/lib/fontStyle";

export const Highlight = styled.span`
  font-weight: 500;
`;

export const Title = styled(Heading_3)`
  font-weight: 200;
  text-align: center;
  color: ${({ theme }) => theme.color.grey_200};
`;

export const Description = styled(Heading_5)`
  font-weight: 200;
  color: ${({ theme }) => theme.color.grey_200};

  margin-top: 0.6rem;
`;

export const Icon = styled.section`
  width: 26rem;
  height: 24rem;

  margin: 2rem 5rem 8.9rem 5rem;
`;
