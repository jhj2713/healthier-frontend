import styled from "styled-components";
import { Heading_3 } from "../../../lib/fontStyle";

const Line = styled.section`
  width: 2.4rem;
  height: 0.2rem;

  background-color: ${({ theme }) => theme.color.green};
`;
const TitleText = styled(Heading_3)`
  margin-top: 1.2rem;
  color: ${({ theme }) => theme.color.grey_200};

  white-space: pre-wrap;
`;

const Title = ({ text }: { text: string }) => {
  return (
    <>
      <Line />
      <TitleText>{text}</TitleText>
    </>
  );
};

export default Title;
