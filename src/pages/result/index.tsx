import { useLayoutEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ResultHeader from "./resultHeader";
import ResultLoading from "./resultLoading";
import ResultModal from "./resultModal";
import BottomBar from "src/components/bottomBar";
import CoverPage from "./coverPage";
import DefinitionPage from "./definitionPage";
import LifePage from "./lifePage";
import MedicinePage from "./medicinePage";
import TreatmentPage from "./treatmentPage";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { IDiagnosticResult } from "src/interfaces/diagnosticResult";
import { ICoverPageProps, IDefinePageProps, ILifeProps, IMedicine, ITreatPageProps } from "src/interfaces/resultPage";
import { Container } from "./index.style";
import useModal from "src/hooks/useModal";

const ResultPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation() as { state: IDiagnosticResult };
  const { isOpenModal, modalRef, openModal, closeModal } = useModal();

  const [curIndex, setCurIndex] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const [coverData, setCoverData] = useState<ICoverPageProps>({
    illustration: "",
    highlight: "",
    title: "",
    description: [],
    severity: 0,
  });
  const [defineData, setDefineData] = useState<IDefinePageProps>({
    title: "",
    definition: [],
    tag_flag: 0,
    cause_detail: [],
  });
  const [lifeData, setLifeData] = useState([] as ILifeProps[]);
  const [medicineData, setMedicineData] = useState<IMedicine[] | undefined>();
  const [treatData, setTreatData] = useState<ITreatPageProps[] | undefined>();

  useLayoutEffect(() => {
    if (!state) {
      navigate("/");
    } else {
      setCoverData({
        illustration: state.diagnostic_result.illustration,
        highlight: state.diagnostic_result.h1,
        title: state.diagnostic_result.title,
        description: state.diagnostic_result.h2,
        severity: state.diagnostic_result.severity,
      });
      setDefineData({
        title: state.diagnostic_result.explanation.title,
        definition: state.diagnostic_result.explanation.details,
        tag_flag: state.diagnostic_result.cause.tag_flag,
        cause: state.diagnostic_result.cause.tags,
        cause_detail: state.diagnostic_result.cause.detail,
      });
      setLifeData(state.diagnostic_result.solutions);
      setMedicineData(state.diagnostic_result.medicines);
      setTreatData(state.diagnostic_result.treatments);

      if (state.type === "result") setIsSaved(true);
    }
  }, [state]);
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [curIndex]);

  const handleIndexChange = (swiper: any) => {
    setCurIndex(swiper.activeIndex + 1);
  };

  const setTotalCount = (): number => {
    let total = 5;
    if (!medicineData) total--;
    if (!treatData) total--;

    return total;
  };

  return (
    <Container>
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
              <LifePage lifestyle={lifeData} type={state.diagnostic_result.id} />
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
          {isOpenModal && <ResultModal ref={modalRef} closeModal={closeModal} setLoading={setLoading} resultId={state.diagnostic_result.id} />}
          <BottomBar
            curIndex={curIndex}
            totalCount={setTotalCount()}
            openModal={openModal}
            setLoading={setLoading}
            isSaved={isSaved}
            resultId={state.diagnostic_result.id}
          />
        </>
      )}
    </Container>
  );
};

export default ResultPage;
