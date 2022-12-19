import LoadingContainer from "src/components/loadingContainer";
import { Title, Icon, BottomTextBox, Tips, Description } from "./index.style";

const DiagnosisLoading = () => {
  return (
    <LoadingContainer>
      <>
        <Title>
          <span className="highlight">정확한 증상 진단</span>을 위해
          <br /> 헬시어가 증상을 분석중이에요
        </Title>
        <Icon>
          <img
            loading="eager"
            alt="icon"
            src="https://healthier.s3.ap-northeast-2.amazonaws.com/client/%E1%84%8C%E1%85%B5%E1%86%AB%E1%84%83%E1%85%A1%E1%86%AB%E1%84%8C%E1%85%AE%E1%86%BC.gif"
            width={260}
          />
        </Icon>
        <BottomTextBox>
          <Tips>Tips</Tips>
          <Description>로그인을 하면 진단내역을 모아 볼 수 있어요!</Description>
        </BottomTextBox>
      </>
    </LoadingContainer>
  );
};

export default DiagnosisLoading;
