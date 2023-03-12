import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HeadacheDiagnose } from "src/api/diagnose";
import DiagnosisCard from "src/components/diagnosisCard";
import MainHeader from "src/components/mainHeader";
import { IDiagnosisList } from "src/interfaces/component";
import { IDiagnosisResultList } from "src/interfaces/diagnosticResult";
import { Container, DescriptionText, List, Title } from "./index.style";

const DiagnosisList = () => {
  const { state } = useLocation() as { state: IDiagnosisResultList };
  const navigate = useNavigate();

  useEffect(() => {
    if (!state) navigate("/");
  }, []);

  const handleNavigate = async (diag: IDiagnosisList) => {
    const diagnosisResult = await HeadacheDiagnose.postResultDetail(Number(diag.record.diagnosis_id));

    navigate("/result", {
      state: {
        type: "result",
        diagnostic_result: diagnosisResult.diagnostic_result,
      },
    });
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
      <DescriptionText style={{ marginTop: "2.4rem" }}>
        <span className="highlight">가장 가능성 높은 질환</span>
      </DescriptionText>
      <List>
        {state &&
          state.dataList.most_likely.map((diag, idx) => (
            <DiagnosisCard key={idx} diagnosis={diag} handleNavigate={() => handleNavigate(diag)} />
          ))}
      </List>
      <DescriptionText style={{ marginTop: "2.4rem" }}>
        <span className="highlight">다음 질환도 의심되어요!</span>
      </DescriptionText>
      <List>
        {state &&
          state.dataList.suspicious.map((diag, idx) => (
            <DiagnosisCard key={idx} diagnosis={diag} handleNavigate={() => handleNavigate(diag)} />
          ))}
      </List>
    </Container>
  );
};

export default DiagnosisList;
