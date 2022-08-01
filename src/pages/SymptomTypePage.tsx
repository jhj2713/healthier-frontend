import { useEffect, useState } from "react";
import styled from "styled-components";
import ContentHeader from "../components/header/ContentHeader";
import SymptomTypeComponent from "../components/symptomTypePage/SymptomTypeComponent";
import { Heading_3 } from "../lib/fontStyle";
import { symptom_type } from "../store/symptom_type";
import SymptomModal from "../components/modal/SymptomModal";
import { useLocation, useNavigate } from "react-router-dom";

const Container = styled.section`
  height: calc(100vh - 5.6rem);

  background: radial-gradient(
      300.02% 130.63% at 164.62% 165.58%,
      rgba(84, 100, 242, 0.9) 0%,
      rgba(52, 62, 135, 0) 100%
    )
    #131416;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 5.6rem 2rem 0 2rem;
`;
const Title = styled(Heading_3)`
  color: ${({ theme }) => theme.color.grey_200};
  text-align: center;

  margin-top: 7rem;
  margin-bottom: 6.6rem;
`;
const SymptomContainer = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;

  & + & {
    margin-top: 1.2rem;
  }
`;

const SymptomTypePage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [select, setSelect] = useState(-1);
  const [modal, setModal] = useState(false);

  const handleSelect = (idx: number) => {
    setSelect(idx);
    setTimeout(() => {
      setModal(true);
    }, 200);
  };

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
    if (!modal) {
      setSelect(-1);
    }
  }, [modal]);

  return (
    <>
      {modal && <SymptomModal setModal={setModal} select={select} />}
      <ContentHeader text="증상 유형 선택" back={true} />
      <Container>
        <Title>
          증상 유형을
          <br /> 선택해주세요
        </Title>
        {symptom_type.map((symp, idx) => (
          <SymptomContainer key={idx} onClick={() => handleSelect(idx)}>
            <SymptomTypeComponent selected={select === idx} title={symp.type} />
          </SymptomContainer>
        ))}
      </Container>
    </>
  );
};

export default SymptomTypePage;
