import styled from "styled-components";
import { Description } from "../../lib/fontStyle";
import ContentHeader from "../header/ContentHeader";
import Title from "../resultPage/common/Title";
import { information_agreement } from "../../store/information_agreement";
import { IAgreementComponentProps } from "../../interfaces/informationPage";

const Container = styled.article<{ agreementDetail: number }>`
  margin-top: 5.6rem;
  padding: 2rem 2.4rem;

  word-break: break-all;
  white-space: pre-line;

  height: calc(100vh - 9.6rem);
  overflow: ${({ agreementDetail }) => (agreementDetail === 2 ? "auto" : "hidden")};
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
const Reference = styled.section<{ tab: number }>`
  font-size: 1rem;
  font-weight: 200;
  line-height: 150%;

  color: ${({ theme }) => theme.color.grey_400};

  margin-top: 0.6rem;

  margin-left: ${({ tab }) => tab}rem;
`;
const Table = styled.section`
  margin-top: 0.7rem;

  font-size: 1rem;
  font-weight: 200;
  line-height: 150%;

  word-break: keep-all;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  color: ${({ theme }) => theme.color.grey_300};
`;
const TableTitle = styled.section`
  padding: 1.6rem 0.8rem;
  background: ${({ theme }) => theme.color.grey_800};

  text-align: center;

  & + & {
    margin-left: 0.1rem;
  }
`;
const TableDescription = styled.section`
  padding: 1.2rem 0.8rem;
  background: ${({ theme }) => theme.color.grey_850};

  text-align: center;

  & + & {
    margin-left: 0.1rem;
  }
`;

const InformationAgreement = ({ agreementDetail, setAgreementDetail }: IAgreementComponentProps) => {
  return (
    <>
      <ContentHeader text={"개인정보 처리방침"} back={false} exit={true} backCallback={() => {}} exitCallback={() => setAgreementDetail(0)} />
      <Container agreementDetail={agreementDetail}>
        <Title text="개인정보 처리방침" />
        <Contents>
          <Prefix>
            &lt; 헬시어 Healthier &gt;('https://healthier.cf/'이하 '헬시어 Healthier')은(는) 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를
            보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다. <br />
            <br />
            &bull; 이 개인정보처리방침은 2022년 8월 8일부터 적용됩니다.
            <br />
            <br />
          </Prefix>
          {information_agreement.map((item, idx) => (
            <AgreementItem key={idx}>
              <Subtitle>{item.title}</Subtitle>
              {item.description.map((description) => (
                <section key={description.id}>
                  <Text>{description.sub_title}</Text>
                  {description.sub_description.map((subItem) => (
                    <SubDescriptionBox key={subItem.id}>
                      <Subtitle>{subItem.title}</Subtitle>
                      {subItem.description.map((subDescription) => (
                        <Text key={subDescription}>{subDescription}</Text>
                      ))}
                    </SubDescriptionBox>
                  ))}
                  {description.sub_reference.length > 1 && (
                    <Reference tab={Number(description.sub_reference[1])}>{description.sub_reference[0]}</Reference>
                  )}
                  {description.sub_table.length > 1 && (
                    <Table>
                      {description.sub_table[0].map((title) => (
                        <TableTitle key={title}>{title}</TableTitle>
                      ))}
                      {description.sub_table[1].map((description) => (
                        <TableDescription key={description}>{description}</TableDescription>
                      ))}
                    </Table>
                  )}
                </section>
              ))}
            </AgreementItem>
          ))}
        </Contents>
      </Container>
    </>
  );
};

export default InformationAgreement;
