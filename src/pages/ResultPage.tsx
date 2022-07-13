import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CoverPage from "../components/resultPage/coverPage/CoverPage";
import DefinitionPage from "../components/resultPage/definitionPage/DefinitionPage";
import LifePage from "../components/resultPage/lifePage/LifePage";
import MedicinePage from "../components/resultPage/medicinePage/MedicinePage";
import TreatmentPage from "../components/resultPage/treatmentPage/TreatmentPage";
import BottomBar from "../components/resultPage/common/BottomBar";
import ResultHeader from "../components/header/ResultHeader";
import ModalContainer from "../components/modal/ModalContainer";
import ResultModal from "../components/modal/ResultModal";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ResultLoading from "../components/loading/ResultLoading";
import { IDiagnosticResult } from "../interfaces/diagnosticResult";

const ResultPage = () => {
  const { state } = useLocation() as { state: IDiagnosticResult };
  const [curIndex, setCurIndex] = useState(1);
  const coverData = {
    illustration: state.diagnostic_result.illustration,
    highlight: state.diagnostic_result.h1,
    title: state.diagnostic_result.title,
    description: state.diagnostic_result.h2,
    severity: state.diagnostic_result.severity,
  };
  const defineData = {
    title: state.diagnostic_result.title,
    definition: state.diagnostic_result.explanation,
    tag_flag: state.diagnostic_result.cause.tag_flag,
    cause: state.diagnostic_result.cause.tags,
    cause_detail: state.diagnostic_result.cause.detail,
  };
  const lifeData = state.diagnostic_result.solutions;
  const medicineData = state.diagnostic_result.medicines;
  const treatData = state.diagnostic_result.treatments;

  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    console.log(state);
    if (state.type === "result") {
      setIsSaved(true);
    }
  }, [state]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [curIndex]);

  const handleIndexChange = (swiper: any) => {
    setCurIndex(swiper.activeIndex + 1);
  };

  const setTotalCount = (): number => {
    let total = 5;
    if (!medicineData) {
      total--;
    }
    if (!treatData) {
      total--;
    }
    return total;
  };

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
            totalCount={setTotalCount()}
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
