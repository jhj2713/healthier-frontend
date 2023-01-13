import { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IDiagnosticResult } from "src/interfaces/diagnosticResult";
import { ICoverPageProps, IDefinePageProps, ILifeProps, IMedicine, ITreatPageProps } from "src/interfaces/resultPage";

function useDiagnosisResult(state: IDiagnosticResult) {
  const navigate = useNavigate();

  const [coverData, setCoverData] = useState<ICoverPageProps>({
    illustration: "",
    highlight: "",
    title: "",
    description: [],
    severity: 0,
  });
  const [defineData, setDefineData] = useState<IDefinePageProps>({
    title: "",
    definition: [],
    tag_flag: 0,
    cause_detail: [],
  });
  const [lifeData, setLifeData] = useState([] as ILifeProps[]);
  const [medicineData, setMedicineData] = useState<IMedicine[] | undefined>();
  const [treatData, setTreatData] = useState<ITreatPageProps[] | undefined>();

  const [isSaved, setIsSaved] = useState(false);

  useLayoutEffect(() => {
    if (!state) {
      navigate("/");
    } else {
      setCoverData({
        illustration: state.diagnostic_result.illustration,
        highlight: state.diagnostic_result.h1,
        title: state.diagnostic_result.title,
        description: state.diagnostic_result.h2,
        severity: state.diagnostic_result.severity,
      });
      setDefineData({
        title: state.diagnostic_result.explanation.title,
        definition: state.diagnostic_result.explanation.details,
        tag_flag: state.diagnostic_result.cause.tag_flag,
        cause: state.diagnostic_result.cause.tags,
        cause_detail: state.diagnostic_result.cause.detail,
      });
      setLifeData(state.diagnostic_result.solutions);
      setMedicineData(state.diagnostic_result.medicines);
      setTreatData(state.diagnostic_result.treatments);

      if (state.type === "result") setIsSaved(true);
    }
  }, [state]);

  return { coverData, defineData, lifeData, medicineData, treatData, isSaved };
}

export default useDiagnosisResult;
