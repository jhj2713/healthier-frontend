import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DiagnosisCard, { IDiagnosisItem } from "src/components/diagnosisCard";
import MainHeader from "src/components/mainHeader";
import { IDiagnosisResultList } from "src/interfaces/diagnosticResult";
import { Container, DescriptionText, List, Title } from "./index.style";

const DiagnosisList = () => {
  //const { state } = useLocation() as { state: IDiagnosisResultList };
  const state = {
    dataList: {
      results: {
        likely: {
          banner_illustration:
            "https://healthier.s3.ap-northeast-2.amazonaws.com/%EC%A7%84%EB%8B%A8%EA%B2%B0%EA%B3%BC/sleepdisorder/62e126cb1549f1a6fe9f58b1.jpg",
          record: {
            diagnosis_id: 0,
            title: "양안부동시",
            severity: 1,
          },
        },
        predicted: [
          {
            banner_illustration:
              "https://healthier.s3.ap-northeast-2.amazonaws.com/%EC%A7%84%EB%8B%A8%EA%B2%B0%EA%B3%BC/sleepdisorder/62e126cb1549f1a6fe9f58b1.jpg",
            record: {
              diagnosis_id: 0,
              title: "양안부동시",
              severity: 0,
            },
          },
          {
            banner_illustration:
              "https://healthier.s3.ap-northeast-2.amazonaws.com/%EC%A7%84%EB%8B%A8%EA%B2%B0%EA%B3%BC/sleepdisorder/62e126cb1549f1a6fe9f58b1.jpg",
            record: {
              diagnosis_id: 0,
              title: "양안부동시",
              severity: 2,
            },
          },
        ],
      },
    },
  };

  const likely = state.dataList.results.likely;

  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!state) {
  //     navigate("/");
  //   }
  // }, [state, navigate]);

  const handleNavigate = async (diag: IDiagnosisItem) => {
    // TODO: 상세 페이지 이동
    // navigate("/result", {
    //   state: {
    //     type: "result",
    //     diagnostic_result: diagnosisResult.diagnostic_result,
    //   },
    // });
  };

  return (
    <Container>
      <MainHeader />
      <Title>
        <span className="highlight">000님</span>의 예상 질환이에요
      </Title>
      <DescriptionText style={{ marginTop: "0.8rem" }}>
        <span className="highlight">예상질환</span>을 클릭하면 자세한 설명을 확인할 수 있어요!
      </DescriptionText>
      {state && likely && (
        <>
          <DescriptionText style={{ marginTop: "2.4rem" }}>
            <span className="highlight">가장 가능성 높은 질환</span>
          </DescriptionText>
          <DiagnosisCard diagnosis={likely} handleNavigate={() => handleNavigate(likely)} />
        </>
      )}
      {state && state.dataList.results.predicted && (
        <>
          <DescriptionText style={{ marginTop: "2.4rem" }}>
            <span className="highlight">예상질환이에요</span>
          </DescriptionText>
          <List>
            {state.dataList.results.predicted.map((diag, idx) => (
              <DiagnosisCard key={idx} diagnosis={diag} handleNavigate={() => handleNavigate(diag)} />
            ))}
          </List>
        </>
      )}
    </Container>
  );
};

export default DiagnosisList;
