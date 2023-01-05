import LoadingContainer from "src/components/loadingContainer";
import imageUrl from "src/data/image_url";
import { Title, Icon, BottomTextBox, Tips, Description } from "./index.style";

const DiagnosisLoading = () => {
  return (
    <LoadingContainer>
      <Title>
        <span className="highlight">정확한 증상 진단</span>을 위해
        <br /> 헬시어가 증상을 분석중이에요
      </Title>
      <Icon>
        <img loading="eager" alt="icon" src={imageUrl.diagnosis_loading} width={260} />
      </Icon>
      <BottomTextBox>
        <Tips>Tips</Tips>
        <Description>로그인을 하면 진단내역을 모아 볼 수 있어요!</Description>
      </BottomTextBox>
    </LoadingContainer>
  );
};

export default DiagnosisLoading;
