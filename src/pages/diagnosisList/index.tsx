import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ContentHeader from "src/components/contentHeader";
import DiagnosisCard, { IDiagnosisItem } from "src/components/diagnosisCard";
import { IDiagnosisResultList } from "src/interfaces/diagnosticResult";
import { Container, List, Title } from "./index.style";

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

  const { likely, predicted } = state.dataList.results;

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
    <>
      <ContentHeader back={true} exit={true} backCallback={() => navigate(-1)} exitCallback={() => navigate("/")} />
      <Container>
        <Title margin="2rem 0 1.6rem 0">
          가장 가능성 높은 질환은
          <br />
          <span className="highlight">{likely.record.title}</span>에요
        </Title>
        {state && (
          <>
            <DiagnosisCard diagnosis={likely} handleNavigate={() => handleNavigate(likely)} />
            <Title margin="4rem 0 1.6rem 0">
              가능성 높은
              <br />
              추가 질환을 알려드려요
            </Title>
            <List>
              {predicted.map((diag, idx) => (
                <DiagnosisCard key={idx} diagnosis={diag} handleNavigate={() => handleNavigate(diag)} />
              ))}
            </List>
          </>
        )}
      </Container>
    </>
  );
};

export default DiagnosisList;
