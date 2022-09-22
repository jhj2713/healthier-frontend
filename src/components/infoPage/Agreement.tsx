import styled, { css } from "styled-components";
import { Body_4, Description } from "../../lib/fontStyle";

const Container = styled.article`
  margin-top: 3.2rem;
`;
const Title = styled(Body_4)`
  color: ${({ theme }) => theme.color.grey_300};
`;
const AgreementList = styled.section`
  margin-top: 1.2rem;
`;
const AgreementBox = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 1.6rem;
`;
const AgreementCheck = styled.section`
  display: flex;
  align-items: center;

  cursor: pointer;
`;
const CheckText = styled(Description)`
  color: ${({ theme }) => theme.color.grey_300};
  margin-left: 0.9rem;
`;
const TotalCheckText = styled(CheckText)`
  font-size: 1.3rem;
`;
const AgreementDetail = styled.section`
  font-size: 1.2rem;
  font-weight: 200;
  line-height: 1.8rem;

  color: ${({ theme }) => theme.color.sub_blue};
  text-decoration-line: underline;

  cursor: pointer;
`;

const Agreement = () => {
  return (
    <Container>
      <Title>약관 동의</Title>
      <AgreementList>
        <AgreementCheck>
          <img alt="check" src={false ? "/images/informationPage/check-active.svg" : "/images/informationPage/check-inactive.svg"} />
          <TotalCheckText>전체 동의합니다</TotalCheckText>
        </AgreementCheck>
        <AgreementBox>
          <AgreementCheck>
            <img alt="check" src={true ? "/images/informationPage/check-active.svg" : "/images/informationPage/check-inactive.svg"} />
            <CheckText>회원 이용약관에 동의합니다 (필수)</CheckText>
          </AgreementCheck>
          <AgreementDetail>내용보기</AgreementDetail>
        </AgreementBox>
        <AgreementBox>
          <AgreementCheck>
            <img alt="check" src={false ? "/images/informationPage/check-active.svg" : "/images/informationPage/check-inactive.svg"} />
            <CheckText>개인정보 수집 및 이용에 동의합니다 (필수)</CheckText>
          </AgreementCheck>
          <AgreementDetail>내용보기</AgreementDetail>
        </AgreementBox>
      </AgreementList>
    </Container>
  );
};

export default Agreement;
