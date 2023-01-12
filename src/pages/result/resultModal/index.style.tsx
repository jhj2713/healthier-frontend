import styled from "styled-components";
import { Body_4, Heading_5 } from "src/lib/fontStyle";

export const Description = styled(Body_4)`
  color: ${({ theme }) => theme.color.grey_200};
`;

export const Title = styled(Heading_5)`
  color: ${({ theme }) => theme.color.grey_200};
  text-align: center;

  margin-top: 0.4rem;

  font-size: 2.2rem;
`;
