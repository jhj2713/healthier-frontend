import LoadingContainer from "../../../components/loadingContainer";
import { Title, Icon } from "./index.style";

const ResultLoading = () => {
  return (
    <LoadingContainer>
      <>
        <Title>
          <span className="highlight">진단 결과</span>를 다시 볼 수 있도록
          <br />
          차곡차곡 저장중이에요
        </Title>
        <Icon>
          <img
            loading="eager"
            alt="icon"
            src="https://healthier.s3.ap-northeast-2.amazonaws.com/client/%E1%84%8C%E1%85%A5%E1%84%8C%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%AE%E1%86%BC.gif"
            width={260}
          />
        </Icon>
      </>
    </LoadingContainer>
  );
};

export default ResultLoading;
