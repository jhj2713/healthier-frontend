import styled from "styled-components";
import { ILifeComponent } from "../../../interfaces/resultPage";
import Description from "../common/Description";

const Background = styled.section<{ idx: number }>`
  display: flex;
  background-color: ${({ theme, idx }) =>
    idx % 2 === 0 ? theme.color.grey_800 : "transparent"};
`;
const Icon = styled.section`
  margin-top: 2.1rem;
  margin-left: 2.4rem;

  font-size: 2.3rem;
`;
const Contents = styled.section`
  padding: 1.6rem 2.4rem 1.6rem 1.6rem;
  width: calc(100vw - 4.8rem);
`;
const Title = styled.section`
  line-height: 150%;
  font-size: 1.6rem;
  font-weight: 300;

  color: ${({ theme }) => theme.color.grey_300};

  margin-bottom: 0.2rem;
`;

const LifeComponent = ({ idx, icon, title, content }: ILifeComponent) => {
  return (
    <Background idx={idx}>
      <Icon>{icon}</Icon>
      <Contents>
        <Title>{title}</Title>
        <Description text={content} />
      </Contents>
    </Background>
  );
};

export default LifeComponent;
