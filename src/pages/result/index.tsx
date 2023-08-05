import { useState } from "react";
import { useLocation } from "react-router-dom";
import Loading from "src/components/loading";
import imageUrl from "src/data/image_url";
import { useGetDDXResult } from "src/hooks/diagnose/useGetResultDetail";
import { Swiper, SwiperSlide } from "swiper/react";
import CoverPage from "./coverPage";
import DefinitionPage from "./definitionPage";
import ExaminationTreatmentPage from "./examinationTreatmentPage";
import * as Styled from "./index.style";
import LifestylePage from "./lifeStylePage";
import MedicinePage from "./medicinePage";
import Pagination from "./pagination";
import ResultHeader from "./resultHeader";
import "swiper/css";

const ResultPage = () => {
  const {
    state: { dx_id },
  } = useLocation() as {
    state: {
      dx_id: string;
    };
  };

  const [page, setPage] = useState<number>(1);
  const { resultData, isLoading } = useGetDDXResult(Number(dx_id));

  return isLoading ? (
    <Loading
      titleTexts={[{ text: "정확한 증상 감별", style: { fontWeight: 500 } }, { text: "을 위해\n헬시어가 증상을 분석중이에요" }]}
      illustration={<Styled.LoadingImage loading="eager" src={imageUrl.diagnosis_loading} />}
      bottomInformation={
        <Styled.BottomTextsContainer>
          <Styled.BottomTitle>Tips</Styled.BottomTitle>
          <Styled.BottomText>{"로그인을 하면 감별진단 내역을\n모아 볼 수 있어요!"}</Styled.BottomText>
        </Styled.BottomTextsContainer>
      }
    />
  ) : (
    <Styled.Container>
      <ResultHeader isCover={page === 1} />
      {resultData && (
        <>
          <Styled.SwiperContainer>
            <Swiper
              onActiveIndexChange={({ activeIndex }) => {
                setPage(activeIndex + 1);
              }}
            >
              <SwiperSlide>
                <CoverPage data={resultData} />
              </SwiperSlide>
              <SwiperSlide>
                <DefinitionPage data={resultData} />
              </SwiperSlide>
              <SwiperSlide>
                <LifestylePage data={resultData} />
              </SwiperSlide>
              {resultData.medicines.length > 0 && (
                <SwiperSlide>
                  <MedicinePage data={resultData} />
                </SwiperSlide>
              )}
              <SwiperSlide>
                <ExaminationTreatmentPage data={resultData} />
              </SwiperSlide>
            </Swiper>
          </Styled.SwiperContainer>
          <Pagination
            page={page}
            setPage={setPage}
            count={resultData.medicines.length > 0 ? 5 : 4}
            departments={resultData.medicalDepartments}
          />
        </>
      )}
    </Styled.Container>
  );
};

export default ResultPage;
