import { useEffect, useState } from "react";
import ContentHeader from "../../components/contentHeader";
import SymptomTypeComponent from "./symptomTypeComponent";
import { symptom_type } from "../../store/symptom_type";
import SymptomTypeModal from "./symptomTypeModal";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Title, SymptomContainer } from "./index.style";
import useModal from "../../hooks/useModal";

const SymptomTypePage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [select, setSelect] = useState(-1);
  const { modalRef, isOpenModal, openModal, closeModal } = useModal();

  const handleSelect = (idx: number) => {
    setSelect(idx);
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(openModal());
      }, 500);
    });
  };

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
    if (!isOpenModal) {
      setSelect(-1);
    }
  }, [isOpenModal]);

  return (
    <>
      {isOpenModal && <SymptomTypeModal ref={modalRef} closeModal={closeModal} select={select} />}
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
