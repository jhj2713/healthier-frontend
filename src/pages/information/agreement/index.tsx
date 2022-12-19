import { memo } from "react";
import { IAgreementProps } from "../../../interfaces/informationPage";
import { Container, Title, AgreementList, AgreementCheck, TotalCheckText, AgreementBox, CheckText } from "./index.style";

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
          <section className="agreement-detail" onClick={() => setAgreementDetail(1)}>
            내용보기
          </section>
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
          <section className="agreement-detail" onClick={() => setAgreementDetail(2)}>
            내용보기
          </section>
        </AgreementBox>
      </AgreementList>
    </Container>
  );
};

export default memo(Agreement);
