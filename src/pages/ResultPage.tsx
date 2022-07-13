import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CoverPage from "../components/resultPage/coverPage/CoverPage";
import DefinitionPage from "../components/resultPage/definitionPage/DefinitionPage";
import LifePage from "../components/resultPage/lifePage/LifePage";
import MedicinePage from "../components/resultPage/medicinePage/MedicinePage";
import TreatmentPage from "../components/resultPage/treatmentPage/TreatmentPage";
import BottomBar from "../components/resultPage/common/BottomBar";
import ResultHeader from "../components/header/ResultHeader";
import diagnosis_result from "../store/diagnosis_result.json";
import ModalContainer from "../components/modal/ModalContainer";
import ResultModal from "../components/modal/ResultModal";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ResultLoading from "../components/loading/ResultLoading";
import { IDiagnosticResult } from "../interfaces/diagnosticResult";

const ResultPage = () => {
  const { state } = useLocation() as IDiagnosticResult;
  const [curIndex, setCurIndex] = useState(1);
  const coverData = {
    illustration: state.illustration,
    highlight: state.h1,
    title: state.title,
    description: state.h2,
    severity: state.severity,
  };
  const defineData = {
    title: state.title,
    definition: state.explanation,
    tag_flag: state.cause.tag_flag,
    cause: state.cause.tags,
    cause_detail: state.cause.detail,
  };
  const lifeData = state.solutions;
  const medicineData = state.medicines;
  const treatData = state.treatments;

  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    console.log(state);
    if (!diagnosis_result.is_result) {
      setIsSaved(true);
    }
  }, [state]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [curIndex]);

  const handleIndexChange = (swiper: any) => {
    setCurIndex(swiper.activeIndex + 1);
  };

  const setTotalCount = () => {};

  return (
    <>
      {loading ? (
        <ResultLoading />
      ) : (
        <>
          <ResultHeader isCover={curIndex === 1} />
          <Swiper onActiveIndexChange={handleIndexChange} autoHeight={true}>
            <SwiperSlide>
              <CoverPage coverData={coverData} />
            </SwiperSlide>
            <SwiperSlide>
              <DefinitionPage defineData={defineData} />
            </SwiperSlide>
            <SwiperSlide>
              <LifePage lifestyle={lifeData} />
            </SwiperSlide>
            {medicineData && (
              <SwiperSlide>
                <MedicinePage medicine={medicineData} />
              </SwiperSlide>
            )}
            {treatData && (
              <SwiperSlide>
                <TreatmentPage treatData={treatData} />
              </SwiperSlide>
            )}
          </Swiper>
          {modal && (
            <ModalContainer setModal={setModal}>
              <ResultModal setModal={setModal} setLoading={setLoading} />
            </ModalContainer>
          )}
          <BottomBar
            curIndex={curIndex}
            totalCount={5}
            setModal={setModal}
            setLoading={setLoading}
            isSaved={isSaved}
          />
        </>
      )}
    </>
  );
};

export default ResultPage;
