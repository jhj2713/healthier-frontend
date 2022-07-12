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
import Loading from "./Loading";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ResultPage = () => {
  const { state } = useLocation();
  const [curIndex, setCurIndex] = useState(1);
  const coverData = {
    illustration: diagnosis_result.diagnostic_result.illustration,
    highlight: diagnosis_result.diagnostic_result.h1,
    title: diagnosis_result.diagnostic_result.title,
    description: diagnosis_result.diagnostic_result.h2,
    severity: diagnosis_result.diagnostic_result.severity,
  };
  const defineData = {
    title: diagnosis_result.diagnostic_result.title,
    definition: diagnosis_result.diagnostic_result.explanation,
    cause: diagnosis_result.diagnostic_result.cause.tags,
    cause_detail: diagnosis_result.diagnostic_result.cause.detail,
  };
  const lifeData = diagnosis_result.diagnostic_result.solutions;
  const medicineData = diagnosis_result.diagnostic_result.medicines;
  const treatData = diagnosis_result.diagnostic_result.treatments;

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
        <Loading />
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
            <SwiperSlide>
              <MedicinePage medicine={medicineData} />
            </SwiperSlide>
            <SwiperSlide>
              <TreatmentPage treatData={treatData} />
            </SwiperSlide>
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
