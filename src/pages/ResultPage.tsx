import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import "swiper/css";
import CoverPage from "../components/resultPage/CoverPage";
import DefinitionPage from "../components/resultPage/DefinitionPage";
import LifePage from "../components/resultPage/LifePage";
import MedicinePage from "../components/resultPage/MedicinePage";
import TreatmentPage from "../components/resultPage/TreatmentPage";

const Container = styled.main``;
const SwiperContainer = styled(Swiper)`
  height: calc(100vh - 9.6rem);
`;

const ResultPage = () => {
  const { state } = useLocation();

  useEffect(() => {
    console.log(state);
  }, []);

  return (
    <Container>
      <SwiperContainer>
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
      </SwiperContainer>
    </Container>
  );
};

export default ResultPage;
