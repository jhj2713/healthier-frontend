import styled from "styled-components";

const Line = styled.section`
  width: 2.4rem;
  height: 0.2rem;

  background-color: ${({ theme }) => theme.color.green};
`;
const Highlight = styled.span``;
const TitleText = styled.section`
  margin-top: 1.2rem;
  color: ${({ theme }) => theme.color.grey_200};

  font-size: 2.2rem;
  white-space: pre-wrap;

  line-height: 140%;
  font-weight: 300;
`;

const Title = ({ highlight, text }: { highlight: string; text: string }) => {
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

export default Title;
