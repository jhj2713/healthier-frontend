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
              <Text>{item.description}</Text>
            </section>
          ))}
        </Contents>
      </Container>
    </>
  );
};

export default MemberAgreement;
