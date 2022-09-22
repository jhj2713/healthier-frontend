import { Dispatch } from "react";
import styled from "styled-components";
import { Description } from "../../lib/fontStyle";
import AgreementHeader from "../header/AgreementHeader";
import Title from "../resultPage/common/Title";
import { information_agreement } from "../../store/information_agreement";

const Container = styled.article`
  margin-top: 5.6rem;
  padding: 2rem 2.4rem;

  word-break: break-all;
  white-space: pre-line;
`;
const Contents = styled.section`
  margin-top: 0.4rem;

  color: ${({ theme }) => theme.color.grey_300};
`;
const Subtitle = styled.section`
  font-size: 1.3rem;
  font-weight: 300;
  line-height: 150%;
`;
const SubDescriptionBox = styled.section`
  margin-top: 1.2rem;
  margin-left: 1.6rem;
`;
const Prefix = styled(Description)`
  margin-top: 3.2rem;
`;
const Text = styled(Description)`
  margin-top: 0.6rem;
`;
const AgreementItem = styled.section`
  margin-top: 2rem;
`;

const InformationAgreement = ({ setAgreementDetail }: { setAgreementDetail: Dispatch<number> }) => {
  return (
    <>
      <AgreementHeader text="개인정보 처리방침" callback={() => setAgreementDetail(0)} />
      <Container>
        <Title text="개인정보 처리방침" />
        <Contents>
          <Prefix>
            &lt; 헬시어 Healthier &gt;('https://healthier.cf/'이하 '헬시어 Healthier')은(는) 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를
            보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다. <br />
            <br />
            &bull; 이 개인정보처리방침은 2022년 8월 8부터 적용됩니다.
            <br />
            <br />
          </Prefix>
          {information_agreement.map((item, idx) => (
            <AgreementItem key={idx}>
              <Subtitle>{item.title}</Subtitle>
              <Text>{item.description}</Text>
              {item.sub_description.map((subItem) => (
                <SubDescriptionBox key={subItem.title}>
                  <Subtitle>{subItem.title}</Subtitle>
                  <Text>{subItem.description}</Text>
                </SubDescriptionBox>
              ))}
            </AgreementItem>
          ))}
        </Contents>
      </Container>
    </>
  );
};

export default InformationAgreement;
