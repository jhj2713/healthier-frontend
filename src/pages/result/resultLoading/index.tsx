import LoadingContainer from "src/components/loadingContainer";
import imageUrl from "src/data/image_url";
import { Title, Icon } from "./index.style";

const ResultLoading = () => {
  return (
    <LoadingContainer>
      <Title>
        <span className="highlight">진단 결과</span>를 다시 볼 수 있도록
        <br />
        차곡차곡 저장중이에요
      </Title>
      <Icon>
        <img loading="eager" alt="icon" src={imageUrl.result_loading} width={260} />
      </Icon>
    </LoadingContainer>
  );
};

export default ResultLoading;
