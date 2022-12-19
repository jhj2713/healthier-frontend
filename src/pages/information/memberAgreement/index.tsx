import Title from "../../../components/resultPage/common/Title";
import { member_agreement } from "../../../store/member_agreement";
import { IAgreementComponentProps } from "../../../interfaces/informationPage";
import ContentHeader from "../../../components/header/ContentHeader";
import { Container, Contents, Text, SubText, Table } from "./index.style";

const MemberAgreement = ({ agreementDetail, setAgreementDetail }: IAgreementComponentProps) => {
  return (
    <>
      <ContentHeader text={"회원 이용약관"} back={false} exit={true} backCallback={() => {}} exitCallback={() => setAgreementDetail(0)} />
      <Container agreementDetail={agreementDetail}>
        <Title text="헬시어 회원 이용약관" />
        <Contents>
          {member_agreement.map((item, idx) => (
            <section key={idx}>
              <section className="sub-title">{item.title}</section>
              {item.description.map((subItem) => (
                <section key={subItem.id}>
                  <Text>{subItem.sub_title}</Text>
                  {subItem.sub_table &&
                    subItem.sub_table.map((table) => (
                      <Table key={table.id}>
                        <section className="table-title">{table.title}</section>
                        <section className="table-description">{table.description}</section>
                      </Table>
                    ))}
                  {subItem.sub_description.map((subDescription) => (
                    <SubText key={subDescription}>{subDescription}</SubText>
                  ))}
                </section>
              ))}
            </section>
          ))}
        </Contents>
      </Container>
    </>
  );
};

export default MemberAgreement;
