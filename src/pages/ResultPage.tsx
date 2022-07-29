import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  BottomBar,
  CoverPage,
  DefinitionPage,
  LifePage,
  MedicinePage,
  TreatmentPage,
} from "../components/resultPage";
import ResultHeader from "../components/header/ResultHeader";
import ModalContainer from "../components/modal/ModalContainer";
import ResultModal from "../components/modal/ResultModal";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ResultLoading from "../components/loading/ResultLoading";
import { IDiagnosticResult } from "../interfaces/diagnosticResult";
import {
  ICoverPageProps,
  IDefinePageProps,
  ILifeProps,
  IMedicine,
  ITreatPageProps,
} from "../interfaces/resultPage";

const ResultPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation() as { state: IDiagnosticResult };

  const [curIndex, setCurIndex] = useState(1);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
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
  const [lifeData, setLifeData] = useState<ILifeProps[]>([]);
  const [medicineData, setMedicineData] = useState<IMedicine[] | undefined>();
  const [treatData, setTreatData] = useState<ITreatPageProps[] | undefined>();

  useEffect(() => {
    if (!state) {
      navigate("/");
    } else {
      console.log(state.diagnostic_result);
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

      if (state.type === "result") {
        setIsSaved(true);
      }
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
              <LifePage
                lifestyle={lifeData}
                type={state.diagnostic_result.id}
              />
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
