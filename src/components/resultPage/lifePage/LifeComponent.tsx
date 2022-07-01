import styled from "styled-components";
import Description from "../common/Description";

const Background = styled.section<{ idx: number }>`
  display: flex;
  background-color: ${({ theme, idx }) =>
    idx % 2 === 0 ? theme.color.grey_800 : "transparent"};
`;
const Icon = styled.section`
  width: 2.3rem;
  height: 3.3rem;
`;
const Container = styled.section`
  display: flex;

  padding: 1.6rem 0;
  width: calc(100vw - 4.8rem);
`;
const Contents = styled.section``;
const Title = styled.section`
  line-height: 150%;
  font-size: 1.6rem;

  color: ${({ theme }) => theme.color.grey_300};

  font-weight: bolder;

  margin-bottom: 0.02rem;
`;

const LifeComponent = ({
  idx,
  title,
  content,
}: {
  idx: number;
  title: string;
  content: string;
}) => {
  return (
    <Background idx={idx}>
      <Icon></Icon>
      <Container>
        <Contents>
          <Title>{title}</Title>
          <Description text={content} />
        </Contents>
      </Container>
    </Background>
  );
};

export default LifeComponent;
