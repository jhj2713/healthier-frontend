import styled from "styled-components";
import LoadingContainer from "./LoadingContainer";
import { Heading_3 } from "../../lib/fontStyle";

const Highlight = styled.span`
  font-weight: 500;
`;
const Title = styled(Heading_3)`
  width: 26.5rem;

  font-weight: 200;
  text-align: center;
  word-break: keep-all;
  color: ${({ theme }) => theme.color.grey_200};
`;
const Icon = styled.section`
  width: 26rem;
  height: 24rem;

  background: ${({ theme }) => theme.color.blue};
  opacity: 0.5;

  margin: 2rem 5rem 1.2rem 5rem;
`;

const LoadingBox = styled.section`
  height: 7.7rem;
`;

const ResultLoading = () => {
  return (
    <LoadingContainer>
      <>
        <Title>
          <Highlight>진단 결과</Highlight>를 다시 볼 수 있도록
          <br />
          차곡차곡 저장중이에요
        </Title>
        <Icon></Icon>
        <LoadingBox />
      </>
    </LoadingContainer>
  );
};

export default ResultLoading;
