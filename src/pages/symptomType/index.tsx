import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ContentHeader from "src/components/contentHeader";
import Layout from "src/components/layout";
import RoundButton from "src/components/roundButton";
import useModal from "src/hooks/useModal";
import theme from "src/lib/theme";
import { DIAGNOSE_TYPE } from "src/utils/diagnosis";
import { Container, Title } from "./index.style";
import SymptomTypeModal from "./symptomTypeModal";

const symptomTypes = [
  { state: DIAGNOSE_TYPE.stomach, text: "급성복통" },
  { state: DIAGNOSE_TYPE.backpain, text: "허리통증" },
  { state: DIAGNOSE_TYPE.diarrhea, text: "배변이상/설사" },
  { state: DIAGNOSE_TYPE.bloodystool, text: "혈변" },
  { state: DIAGNOSE_TYPE.gum, text: "잇몸통증" },
  { state: DIAGNOSE_TYPE.chestpain, text: "흉통" },
];

const SymptomTypePage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [select, setSelect] = useState(-1);
  const { modalRef, isOpenModal, openModal, closeModal } = useModal();

  const handleSelect = (idx: number) => {
    setSelect(idx);

    const timer = setTimeout(() => {
      openModal();
      clearTimeout(timer);
    }, 500);
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
    <Layout>
      {isOpenModal && <SymptomTypeModal ref={modalRef} closeModal={closeModal} select={select} />}
      <ContentHeader back={true} backCallback={() => navigate(-1)} exit={true} exitCallback={() => navigate("/")}>
        증상 유형 선택
      </ContentHeader>

      <Container>
        <Title>
          증상 유형을
          <br /> 선택해주세요
        </Title>
        {/* {symptom_type.map((symp, idx) => (
          <SymptomContainer key={idx} onClick={() => handleSelect(idx)}>
            <SymptomTypeComponent selected={select === idx} title={symp.type} />
          </SymptomContainer>
        ))} */}
        {symptomTypes.map((type) => (
          <RoundButton
            key={type.state}
            outline={theme.color.blue}
            backgroundColor={theme.color.blue}
            color={theme.color.green_100}
            onClick={() => navigate("/diagnosis", { state: type.state })}
          >
            {type.text}
          </RoundButton>
        ))}
      </Container>
    </Layout>
  );
};

export default SymptomTypePage;
