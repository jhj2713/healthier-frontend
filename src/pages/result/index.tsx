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
import { ITreatmentType } from "../../interfaces/component";

const state = {
  type: "1",
  diagnostic_result: {
    id: 1025,
    illustration:
      "https://healthier.s3.ap-northeast-2.amazonaws.com/%EC%A7%84%EB%8B%A8%EA%B2%B0%EA%B3%BC/sleepdisorder/62e126cb1549f1a6fe9f58b1.jpg",
    h1: "진통제를 많이 먹어 두통이 생기는 당신은",
    title: "약물 과용 두통",
    h2: ["과다 복용한 두통 약물을 중단하고,", "두통 유발인자를 피할 수 있도록 생활습관을 개선해보세요."],
    severity: 0,
    explanation: {
      title: "약물 과용 두통이란?",
      details: ["편두통으로 진통제를 과다하게 복용하면 몸에서", "통증을 억제하는 기능이 망가져 발생할 수 있어요."],
    },
    cause: {
      tag_flag: 0,
      tags: null,
      detail: [
        "진통제를 먹으면 두통과 관련된 신경이 흥분돼요.",
        "장기간 먹으면 신경계가 과하게 흥분하게 되고",
        "오히려 통증이 심해질 수 있어요.",
        "\n",
        "여러 성분을 섞은 복합진통제를 한 달에 10일 이상, 아스피린·타이레놀 등 한 가지 성분의 단순진통제를 한 달에 15일 이상 복용하면 약물과용두통이 발생할 수 있어요.",
      ],
    },
    solutions: [
      {
        title: "두통 유발 음식 피하기",
        detail:
          "맥주, 레드와인, 숙성치즈와 초콜릿에 들어있는 효소는 두통을 유발해요. MSG와 같은 인공감미료나 감귤, 바나나, 아보카도와 같은 과일에도 두통 유발성분이 들어있어요.",
        emoji: "https://drive.google.com/uc?export=view&id=1Ou_GTV8IgfWIlpaN7HzM_JeodgaNyYlE",
      },
      {
        title: "요가나 이완요법 하기",
        detail: "명상, 스트레칭을 통해 스트레스를 조절하고 긴장된 근육을 이완시키면 편두통의 강도와 빈도를 줄이는데 도움이 돼요.",
        emoji: "https://drive.google.com/uc?export=view&id=1T97erNMdD-ubjVh19AO20UULiYgXOkhk",
      },
      {
        title: "충분히 휴식하기",
        detail: "조용하고 어두운 방에서 휴식을 취해보아요. 목 뒤쪽에 얼음주머니를 올려놓거나 두피를 마사지하면 증상이 완화돼요.",
        emoji: "https://drive.google.com/uc?export=view&id=1ccq7SM1iGa0MA9wS_KIXL6U4ez5veOgd",
      },
      {
        title: " 편두통 일지 기록하기",
        detail: "두통의 시작일과 지속 기간을 기록해요. 이를 통해 주요 유발 요인이 무엇인지 파악하고 그것을 피하려 노력해보아요.",
        emoji: "https://drive.google.com/uc?export=view&id=1y85S0-ZSyMumklXC1Cd-9R7U-B5AOlhV",
      },
    ],
    medicine_flag: 0,
    medicines: null,
    treatment_flag: 1,
    treatments: [
      {
        title: "구제 약물 처방",
        detail: "과다 복용한 약물을 중단한 후 발생하는 두통을 치료하는 데 사용되는 구제약물을 처방받을 수 있어요.",
        type: "therapy" as ITreatmentType,
      },
      {
        title: "인지행동치료",
        detail: "이완 훈련, 최면 및 스트레스 관리를 통해 환자가 건강한 생활습관으로 두통을 조절하거나 완화시킬 수 있는 방법을 배워요.",
        type: "inspection" as ITreatmentType,
      },
    ],
    banner_illustration: "https://healthier.s3.ap-northeast-2.amazonaws.com/banner/headache/62e126cb1549f1a6fe9f58b1.png",
  },
};

const ResultPage = () => {
  //const { state } = useLocation() as { state: IDiagnosticResult };

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
