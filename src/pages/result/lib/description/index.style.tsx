import { Body_2 } from "src/lib/fontStyle";
import styled from "styled-components";

export const Text = styled(Body_2)`
  color: ${({ theme }) => theme.color.grey_400};
  white-space: pre-line;
  font-weight: 100;

  display: inline;

  &.highlight {
    color: ${({ theme }) => theme.color.green};
  }
`;
