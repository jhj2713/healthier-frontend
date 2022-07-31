import styled from "styled-components";
import LoadingContainer from "./LoadingContainer";
import { Heading_3 } from "../../lib/fontStyle";

const Highlight = styled.span`
  font-weight: 500;
`;
const Title = styled(Heading_3)`
  font-weight: 200;
  text-align: center;
  word-break: keep-all;
  color: ${({ theme }) => theme.color.grey_200};
`;
const Icon = styled.section`
  width: 26rem;
  height: 24rem;

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
        <Icon>
          <img
            alt="icon"
            src="https://healthier.s3.ap-northeast-2.amazonaws.com/client/%E1%84%8C%E1%85%A5%E1%84%8C%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%AE%E1%86%BC.gif"
            width={260}
          />
        </Icon>
        <LoadingBox />
      </>
    </LoadingContainer>
  );
};

export default ResultLoading;
