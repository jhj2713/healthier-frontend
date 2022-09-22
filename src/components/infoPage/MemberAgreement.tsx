import styled from "styled-components";
import AgreementHeader from "../header/AgreementHeader";
import Title from "../resultPage/common/Title";
import { Dispatch } from "react";

const Container = styled.article`
  margin-top: 5.6rem;
`;
const Contents = styled.section`
  padding: 2rem 2.4rem;
`;

const MemberAgreement = ({ setAgreementDetail }: { setAgreementDetail: Dispatch<number> }) => {
  return (
    <>
      <AgreementHeader text="회원 이용약관" callback={() => setAgreementDetail(0)} />
      <Container>
        <Contents>
          <Title text="헬시어 회원 이용약관" />
        </Contents>
      </Container>
    </>
  );
};

export default MemberAgreement;
