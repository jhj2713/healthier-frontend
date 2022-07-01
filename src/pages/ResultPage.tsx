import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import CoverPage from "../components/resultPage/CoverPage";
import DefinitionPage from "../components/resultPage/definitionPage/DefinitionPage";
import LifePage from "../components/resultPage/lifePage/LifePage";
import MedicinePage from "../components/resultPage/medicinePage/MedicinePage";
import TreatmentPage from "../components/resultPage/TreatmentPage";
import BottomNumber from "../components/resultPage/common/BottomNumber";
import RoundButton from "../components/buttons/RoundButton";
import theme from "../lib/theme";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Container = styled.main``;
const SwiperContainer = styled(Swiper)`
  height: calc(100vh - 9.6rem);
`;

const BottomNumbers = styled.section`
  z-index: 5;

  position: fixed;
  bottom: 0;
  width: 100%;

  padding-top: 13.6rem;
  padding-bottom: 4.8rem;

  background: linear-gradient(
    180deg,
    rgba(19, 20, 22, 0) 0%,
    rgba(19, 20, 22, 0.947917) 78.12%,
    #131416 100%
  );
`;
const BottomButton = styled.section`
  z-index: 5;

  position: fixed;
  margin: 0 2rem;
  bottom: 3.4rem;
`;

const ResultPage = () => {
  const { state } = useLocation();
  const [curIndex, setCurIndex] = useState(0);

  useEffect(() => {
    console.log(state);
  }, [state]);

  const handleIndexChange = (swiper: any) => {
    setCurIndex(swiper.activeIndex + 1);
  };

  return (
    <Container>
      <SwiperContainer onActiveIndexChange={handleIndexChange}>
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
      {curIndex !== 5 ? (
        <BottomNumbers>
          <BottomNumber curNum={curIndex} />
        </BottomNumbers>
      ) : (
        <BottomButton>
          <RoundButton
            outline="none"
            backgroundColor={theme.color.blue}
            color={theme.color.grey_100}
            text="나의 진단기록장에 저장하기"
          />
        </BottomButton>
      )}
    </Container>
  );
};

export default ResultPage;
