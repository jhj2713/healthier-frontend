import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import CoverPage from "../components/resultPage/CoverPage";
import DefinitionPage from "../components/resultPage/definitionPage/DefinitionPage";
import LifePage from "../components/resultPage/lifePage/LifePage";
import MedicinePage from "../components/resultPage/medicinePage/MedicinePage";
import TreatmentPage from "../components/resultPage/TreatmentPage";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import BottomBar from "../components/resultPage/common/BottomBar";

const Container = styled.main``;

const ResultPage = () => {
  const { state } = useLocation();
  const [curIndex, setCurIndex] = useState(1);

  useEffect(() => {
    console.log(state);
  }, [state]);

  const handleIndexChange = (swiper: any) => {
    setCurIndex(swiper.activeIndex + 1);
  };

  return (
    <Container>
      <Swiper onActiveIndexChange={handleIndexChange}>
        <SwiperSlide>
          <CoverPage />
        </SwiperSlide>
        <SwiperSlide>
          <DefinitionPage />
        </SwiperSlide>
        <SwiperSlide>
          <LifePage />
        </SwiperSlide>
        <SwiperSlide>
          <MedicinePage />
        </SwiperSlide>
        <SwiperSlide>
          <TreatmentPage />
        </SwiperSlide>
      </Swiper>
      <BottomBar curIndex={curIndex} />
    </Container>
  );
};

export default ResultPage;
