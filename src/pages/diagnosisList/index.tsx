import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ContentHeader from "src/components/contentHeader";
import DiagnosisCard, { IDiagnosisItem } from "src/components/diagnosisCard";
import Layout from "src/components/layout";
import { IDiagnosisResultList } from "src/interfaces/diagnosticResult";
import { List, Title } from "./index.style";

const DiagnosisList = () => {
  const { state } = useLocation() as { state: IDiagnosisResultList };

  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, [state, navigate]);

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
    <Layout padding="0 2.4rem">
      <ContentHeader back={true} exit={true} backCallback={() => navigate(-1)} exitCallback={() => navigate("/")} />
      {state && (
        <>
          <Title margin="2rem 0 1.6rem 0">
            가장 가능성 높은 질환은
            <br />
            <span className="highlight">{state.likely.record.title}</span>에요
          </Title>
          <DiagnosisCard isSquare diagnosis={state.likely} handleNavigate={() => handleNavigate(state.likely)} />
          <Title margin="4rem 0 1.6rem 0">
            가능성 높은
            <br />
            추가 질환을 알려드려요
          </Title>
          <List>
            {state.predicted.map((diag, idx) => (
              <DiagnosisCard key={idx} diagnosis={diag} handleNavigate={() => handleNavigate(diag)} />
            ))}
          </List>
        </>
      )}
    </Layout>
  );
};

export default DiagnosisList;
