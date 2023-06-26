import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ContentHeader from "src/components/contentHeader";
import Layout from "src/components/layout";
import { DIAGNOSE_TYPES } from "src/data/symptom_type";
import useModal from "src/hooks/useModal";
import * as Styled from "./index.style";
import SymptomCategory from "./symptomCategory";
import SymptomTypeModal from "./symptomTypeModal";
import type { TDiagnoseType, TSymptomType } from "src/interfaces/symptomPage";

const SymptomTypePage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [select, setSelect] = useState(-1);
  const [symptom, setSymptom] = useState<TSymptomType>();
  const { modalRef, isOpenModal, openModal, closeModal } = useModal();

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
    if (!isOpenModal) {
      setSelect(-1);
    }
  }, [isOpenModal, navigate, state]);

  return (
    <Layout>
      {isOpenModal && <SymptomTypeModal ref={modalRef} closeModal={closeModal} select={select} />}
      <ContentHeader back={true} backCallback={() => navigate(-1)} exit={true} exitCallback={() => navigate("/")}>
        증상 유형 선택
      </ContentHeader>

      <Styled.Container>
        <Styled.Title>
          증상 유형을
          <br /> 선택해주세요
        </Styled.Title>
        {/* {symptom_type.map((symp, idx) => (
          <SymptomContainer key={idx} onClick={() => handleSelect(idx)}>
            <SymptomTypeComponent selected={select === idx} title={symp.type} />
          </SymptomContainer>
        ))} */}
        <Styled.SymptomCategoryContainer>
          {DIAGNOSE_TYPES.map((dt: TDiagnoseType) => (
            <SymptomCategory key={dt.category} diagnoseType={dt} />
          ))}
        </Styled.SymptomCategoryContainer>
      </Styled.Container>
    </Layout>
  );
};

export default SymptomTypePage;
