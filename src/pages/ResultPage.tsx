import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CoverPage from "../components/resultPage/coverPage/CoverPage";
import DefinitionPage from "../components/resultPage/definitionPage/DefinitionPage";
import LifePage from "../components/resultPage/lifePage/LifePage";
import MedicinePage from "../components/resultPage/medicinePage/MedicinePage";
import TreatmentPage from "../components/resultPage/treatmentPage/TreatmentPage";
import BottomBar from "../components/resultPage/common/BottomBar";
import ResultHeader from "../components/header/ResultHeader";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const medicine = [
  {
    id: 1,
    image: "antihistamines",
    medicine: "항히스타민제",
    efficacy:
      "수면에 도움을 주는 의약품으로 뇌에서 잠을 깨게하는 '히스타민'의 억제를 도와줘요.",
    precautions: [
      "잠들기 30분~1시간 전에 복용해야 해요",
      "항히스타민제 장기복용은 치매를 유발할 수 있어 2주 이상 쓰지 않는 것을 권고하고 있어요.",
    ],
    side_effect: [
      "😴 오전 졸림증",
      "🚽 변비",
      "👄 구강건조",
      "😡 맥박 증가",
      "😞 배뇨장애",
    ],
  },
  {
    id: 2,
    image: "redormin",
    medicine: "레돌민",
    efficacy:
      "레돌민 성분의 의약품은 수면 유도제로, 수면 유도 호르몬을 조절하여 수면 사이클을 정상으로 만들어요.",
    precautions: [
      "잠들기 30분~1시간 전에 복용해야 해요",
      "술과 함께 복용하면 안돼요!",
    ],
    side_effect: ["😴 오전 졸림증", "🍄 (드물게) 간독성"],
  },
];

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
    <>
      <ResultHeader isCover={curIndex === 1} />
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
          <MedicinePage medicine={medicine} />
        </SwiperSlide>
        <SwiperSlide>
          <TreatmentPage />
        </SwiperSlide>
      </Swiper>
      <BottomBar curIndex={curIndex} />
    </>
  );
};

export default ResultPage;
