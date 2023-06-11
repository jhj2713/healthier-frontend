import { memo } from "react";
import { IAgreementProps } from "src/interfaces/informationPage";
import { Container, Title, AgreementList, AgreementCheck, TotalCheckText, AgreementBox, CheckText } from "./index.style";

const Agreement = ({ agree, setAgree, setAgreementDetail }: IAgreementProps) => {
  const handleAgree = (e: React.MouseEvent): void => {
    const target = e.currentTarget as HTMLElement;

    if (target.id === "member") {
      setAgree({ ...agree, member: !agree.member });
    } else if (target.id === "information") {
      setAgree({ ...agree, information: !agree.information });
    } else {
      if (agree.member && agree.information) {
        setAgree({ member: false, information: false });
      } else {
        setAgree({ member: true, information: true });
      }
    }
  };

  return (
    <Container>
      <Title>약관 동의</Title>
      <AgreementList>
        <AgreementCheck id="total" onClick={handleAgree}>
          <img alt="total check" src={`/images/informationPage/check-${agree.member && agree.information ? "" : "in"}active.svg`} />
          <TotalCheckText>전체 동의합니다</TotalCheckText>
        </AgreementCheck>
        <AgreementBox>
          <AgreementCheck id="member" onClick={handleAgree}>
            <img alt="member check" src={`/images/informationPage/check-${agree.member ? "" : "in"}active.svg`} />
            <CheckText>회원 이용약관에 동의합니다 (필수)</CheckText>
          </AgreementCheck>
          <section className="agreement-detail" onClick={() => setAgreementDetail(1)}>
            내용보기
          </section>
        </AgreementBox>
        <AgreementBox>
          <AgreementCheck id="information" onClick={handleAgree}>
            <img alt="information check" src={`/images/informationPage/check-${agree.information ? "" : "in"}active.svg`} />
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
