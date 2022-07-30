import styled from "styled-components";
import LoadingContainer from "./LoadingContainer";
import { Heading_3, Body_1, Body_3 } from "../../lib/fontStyle";

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
  height: 24.8rem;

  margin: 2rem 5rem 1.2rem 5rem;
`;
const BottomTextBox = styled.section`
  text-align: center;
`;
const Tips = styled(Body_3)`
  font-weight: 200;
  letter-spacing: -0.05rem;

  color: ${({ theme }) => theme.color.grey_300};
`;
const Description = styled(Body_1)`
  margin-top: 0.8rem;
  width: 17.2rem;

  color: ${({ theme }) => theme.color.grey_400};
`;

const DiagnosisLoading = () => {
  return (
    <LoadingContainer>
      <>
        <Title>
          <Highlight>정확한 증상 진단</Highlight>을 위해
          <br /> 헬시어가 증상을 분석중이에요
        </Title>
        <Icon>
          <img
            alt="icon"
            src="/images/loading/DiagnosisImage.gif"
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
