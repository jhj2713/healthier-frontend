import styled from "styled-components";

const Line = styled.section`
  width: 2.4rem;
  height: 0.2rem;

  background-color: ${({ theme }) => theme.color.green};
`;
const Highlight = styled.span`
  font-weight: bolder;
`;
const TitleText = styled.section`
  margin-top: 1rem;

  font-size: 2.2rem;
`;

const TitleBar = ({ highlight, text }: { highlight: string; text: string }) => {
  return (
    <>
      <Line />
      <TitleText>
        <Highlight>{highlight}</Highlight>
        {text}
      </TitleText>
    </>
  );
};

export default TitleBar;
