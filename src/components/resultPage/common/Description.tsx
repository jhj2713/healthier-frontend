import styled from "styled-components";
import { Body_2 } from "../../../lib/fontStyle";

const Text = styled(Body_2)`
  color: ${({ theme }) => theme.color.grey_400};
  white-space: pre-line;
`;

const Description = ({ text }: { text: string }) => {
  return <Text>{text}</Text>;
};

export default Description;
