import styled from "styled-components";
import { IAgreementProps } from "../../interfaces/informationPage";
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
  font-size: 1.4rem;
  color: ${({ theme }) => theme.color.grey_300};
  margin-left: 0.9rem;
`;
const TotalCheckText = styled(CheckText)`
  font-size: 1.6rem;
`;
const AgreementDetail = styled.section`
  font-size: 1.3rem;
  font-weight: 200;
  line-height: 1.8rem;

  color: ${({ theme }) => theme.color.sub_blue};
  text-decoration-line: underline;

  cursor: pointer;
`;

const Agreement = ({ agree, setAgree, setAgreementDetail }: IAgreementProps) => {
  const handleAgree = (e: React.MouseEvent): void => {
    const target = e.target as HTMLElement;
    if (target.id === "member") setAgree({ ...agree, member: !agree.member });
    else if (target.id === "information") setAgree({ ...agree, information: !agree.information });
    else {
      if (agree.member && agree.information) setAgree({ member: false, information: false });
      else setAgree({ member: true, information: true });
    }
  };

  return (
    <Container>
      <Title>약관 동의</Title>
      <AgreementList>
        <AgreementCheck>
          <img
            alt="total check"
            id="total"
            src={`/images/informationPage/check-${agree.member && agree.information ? "" : "in"}active.svg`}
            onClick={handleAgree}
          />
          <TotalCheckText>전체 동의합니다</TotalCheckText>
        </AgreementCheck>
        <AgreementBox>
          <AgreementCheck>
            <img alt="member check" id="member" src={`/images/informationPage/check-${agree.member ? "" : "in"}active.svg`} onClick={handleAgree} />
            <CheckText>회원 이용약관에 동의합니다 (필수)</CheckText>
          </AgreementCheck>
          <AgreementDetail onClick={() => setAgreementDetail(1)}>내용보기</AgreementDetail>
        </AgreementBox>
        <AgreementBox>
          <AgreementCheck>
            <img
              alt="information check"
              id="information"
              src={`/images/informationPage/check-${agree.information ? "" : "in"}active.svg`}
              onClick={handleAgree}
            />
            <CheckText>개인정보 수집 및 이용에 동의합니다 (필수)</CheckText>
          </AgreementCheck>
          <AgreementDetail onClick={() => setAgreementDetail(2)}>내용보기</AgreementDetail>
        </AgreementBox>
      </AgreementList>
    </Container>
  );
};

export default Agreement;
