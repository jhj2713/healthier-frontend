import styled from "styled-components";
import { Body_2 } from "src/lib/fontStyle";

export const Text = styled(Body_2)`
  color: ${({ theme }) => theme.color.grey_400};
  white-space: pre-line;
`;
