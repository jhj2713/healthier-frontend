import { useState } from "react";
import { useLocation } from "react-router-dom";
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
    <div>로딩중</div>
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
