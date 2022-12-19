import { useEffect, useState } from "react";
import ContentHeader from "../../components/header/ContentHeader";
import SymptomTypeComponent from "../../components/symptomTypePage/SymptomTypeComponent";
import { symptom_type } from "../../store/symptom_type";
import SymptomModal from "../../components/modal/SymptomModal";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Title, SymptomContainer } from "./index.style";

const SymptomTypePage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [select, setSelect] = useState(-1);
  const [modal, setModal] = useState(false);

  const handleSelect = (idx: number) => {
    setSelect(idx);
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(setModal(true));
      }, 500);
    });
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
      <ContentHeader text="증상 유형 선택" back={true} backCallback={() => navigate(-1)} exit={true} exitCallback={() => navigate("/")} />
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
