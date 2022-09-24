import styled from "styled-components";
import AgreementHeader from "../header/AgreementHeader";
import Title from "../resultPage/common/Title";
import { Dispatch } from "react";
import { Description } from "../../lib/fontStyle";
import { member_agreement } from "../../store/member_agreement";

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

  margin-top: 2.8rem;
`;
const Text = styled(Description)`
  margin-top: 0.6rem;
`;
const SubText = styled(Text)`
  margin-left: 1.6rem;

  & + & {
    margin-top: 0.2rem;
  }
`;
const Table = styled.section`
  margin-top: 0.6rem;
  margin-left: 0.9rem;

  font-size: 1rem;
  font-weight: 200;
  line-height: 150%;

  display: flex;

  word-break: keep-all;

  color: ${({ theme }) => theme.color.grey_300};
  & + & {
    margin-top: 0.1rem;
  }
`;
const TableTitle = styled.section`
  width: 6.6rem;
  padding: 1rem;

  background: ${({ theme }) => theme.color.grey_800};
`;
const TableDescription = styled.section`
  width: 100%;
  padding: 1rem 1.2rem;

  background: ${({ theme }) => theme.color.grey_850};
`;

const MemberAgreement = ({ setAgreementDetail }: { setAgreementDetail: Dispatch<number> }) => {
  return (
    <>
      <AgreementHeader text="회원 이용약관" callback={() => setAgreementDetail(0)} />
      <Container>
        <Title text="헬시어 회원 이용약관" />
        <Contents>
          {member_agreement.map((item, idx) => (
            <section key={idx}>
              <Subtitle>{item.title}</Subtitle>
              {item.description.map((subItem) => (
                <section key={subItem.id}>
                  <Text>{subItem.sub_title}</Text>
                  {subItem.sub_table &&
                    subItem.sub_table.map((table) => (
                      <Table key={table.id}>
                        <TableTitle>{table.title}</TableTitle>
                        <TableDescription>{table.description}</TableDescription>
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
