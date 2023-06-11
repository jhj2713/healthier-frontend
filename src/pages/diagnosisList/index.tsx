import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DiagnosisCard, { IDiagnosisItem } from "src/components/diagnosisCard";
import MainHeader from "src/components/mainHeader";
import { IDiagnosisResultList } from "src/interfaces/diagnosticResult";
import { Container, DescriptionText, List, Title } from "./index.style";

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
    <Container>
      <MainHeader />
      <Title>
        <span className="highlight">000님</span>의 예상 질환이에요
      </Title>
      <DescriptionText style={{ marginTop: "0.8rem" }}>
        <span className="highlight">예상질환</span>을 클릭하면 자세한 설명을 확인할 수 있어요!
      </DescriptionText>
      {state && state.dataList.results.likely && (
        <>
          <DescriptionText style={{ marginTop: "2.4rem" }}>
            <span className="highlight">가장 가능성 높은 질환</span>
          </DescriptionText>
          <List>
            {state.dataList.results.likely.map((diag, idx) => (
              <DiagnosisCard key={idx} diagnosis={diag} handleNavigate={() => handleNavigate(diag)} />
            ))}
          </List>
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
      {state && state.dataList.results.suspicious && (
        <>
          <DescriptionText style={{ marginTop: "2.4rem" }}>
            <span className="highlight">다음 질환도 의심되어요!</span>
          </DescriptionText>
          <List>
            {state.dataList.results.suspicious.map((diag, idx) => (
              <DiagnosisCard key={idx} diagnosis={diag} handleNavigate={() => handleNavigate(diag)} />
            ))}
          </List>
        </>
      )}
    </Container>
  );
};

export default DiagnosisList;
