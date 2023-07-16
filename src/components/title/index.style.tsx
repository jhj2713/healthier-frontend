import { Heading_3 } from "src/lib/fontStyle";
import styled from "styled-components";

export const Line = styled.section`
  width: 2.4rem;
  height: 0.2rem;

  background-color: ${({ theme }) => theme.color.green};
`;

export const TitleText = styled(Heading_3)`
  margin-top: 1.2rem;
  color: ${({ theme }) => theme.color.grey_200};

  white-space: pre-wrap;
`;
