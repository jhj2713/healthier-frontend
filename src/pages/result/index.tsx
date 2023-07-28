import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useGetDDXResult } from "src/hooks/diagnose/useGetResultDetail";
import { Swiper, SwiperSlide } from "swiper/react";
import CoverPage from "./coverPage";
import DefinitionPage from "./definitionPage";
import * as Styled from "./index.style";
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
        <Styled.SwiperContainer>
          <Swiper
            onActiveIndexChange={({ activeIndex }) => {
              setPage(activeIndex + 1);
            }}
            autoHeight={true}
          >
            <SwiperSlide>
              <CoverPage data={resultData} />
            </SwiperSlide>
            <SwiperSlide>
              <DefinitionPage data={resultData} />
            </SwiperSlide>
          </Swiper>
        </Styled.SwiperContainer>
      )}

      <Pagination page={page} setPage={setPage} />
    </Styled.Container>
  );
};

export default ResultPage;
