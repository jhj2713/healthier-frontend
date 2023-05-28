import { useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ResultHeader from "./resultHeader";
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
import { Container, Description, LoadingIcon, LoadingTitle } from "./index.style";
import useModal from "src/hooks/useModal";
import Loading from "src/components/loading";
import imageUrl from "src/data/image_url";
import useDiagnosisResult from "src/hooks/useDiagnosisResult";

const ResultPage = () => {
  const { state } = useLocation() as { state: IDiagnosticResult };
  const { isOpenModal, modalRef, openModal, closeModal } = useModal();

  const [curIndex, setCurIndex] = useState(1);
  const [loading, setLoading] = useState("");

  const { coverData, defineData, lifeData, medicineData, treatData, isSaved } = useDiagnosisResult(state);

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
      {loading === "result" ? (
        <Loading
          title={
            <LoadingTitle>
              <span className="highlight">감별 결과</span>를 다시 볼 수 있도록
              <br />
              차곡차곡 저장중이에요
            </LoadingTitle>
          }
          icon={<LoadingIcon loading="eager" alt="icon" src={imageUrl.result_loading} />}
        />
      ) : loading === "home" ? (
        <Loading
          title={
            <>
              <LoadingTitle>
                <span className="highlight">홈으로 이동중이에요</span>
              </LoadingTitle>
              <Description>
                다음에 더 <span className="highlight">다양한 증상감별</span>로 만나요!
              </Description>
            </>
          }
          icon={<LoadingIcon loading="eager" alt="icon" src={imageUrl.home_loading} />}
        />
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
          {isOpenModal && (
            <ResultModal ref={modalRef} closeModal={closeModal} setLoading={setLoading} resultId={state.diagnostic_result.id} />
          )}
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
