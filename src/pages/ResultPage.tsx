import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import "swiper/css";
import CoverPage from "../components/resultPage/CoverPage";
import DefinitionPage from "../components/resultPage/DefinitionPage";

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
        <SwiperSlide>3</SwiperSlide>
      </SwiperContainer>
    </Container>
  );
};

export default ResultPage;
