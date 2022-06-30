import styled from "styled-components";

const Text = styled.section`
  font-size: 1.5rem;
  font-weight: lighter;
  color: ${({ theme }) => theme.color.grey_400};

  line-height: 150%;
`;

const Description = ({ text }: { text: string }) => {
  return <Text>{text}</Text>;
};

export default Description;
