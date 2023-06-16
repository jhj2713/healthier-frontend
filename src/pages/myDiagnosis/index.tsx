import { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Diagnosis } from "src/api/diagnosis";
import DiagnosisCard, { IDiagnosisItem } from "src/components/diagnosisCard";
import Layout from "src/components/layout";
import MainHeader from "src/components/mainHeader";
import RoundButton from "src/components/roundButton";
import theme from "src/lib/theme";
import { useAppSelector, useAppDispatch } from "src/state";
import { DELETE_TOKEN } from "src/state/authSlice";
import EmptyPage from "./emptyList";
import { Title, DescriptionBox, List, ButtonBackground } from "./index.style";

const MyDiagnosis = () => {
  const navigate = useNavigate();
  const [diagnosisList, setDiagnosisList] = useState([] as IDiagnosisItem[]);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);
  const { accessToken } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    const getList = async () => {
      try {
        const res = await Diagnosis.getDiagnosis(accessToken);

        setDiagnosisList(res.diagnosis.reverse());
        setName(res.nickname);
        setLoading(false);
      } catch (error) {
        dispatch(DELETE_TOKEN);
        alert("감별 기록 로딩 실패, 다시 시도해주세요");
      }
    };

    getList();
  }, []);

  const handleNavigate = async (diag: IDiagnosisItem) => {
    const diagnosisResult = await Diagnosis.getDiagnosisDetail(diag.record.diagnosis_id);

    navigate("/result", {
      state: {
        type: "result",
        diagnostic_result: diagnosisResult.diagnostic_result,
      },
    });
  };

  return (
    <Layout>
      <MainHeader />
      {loading || (
        <>
          {diagnosisList.length === 0 ? (
            <EmptyPage />
          ) : (
            <>
              <Title>
                <span className="highlight">{name}님</span>
                이 저장한
                <br /> 증상 감별 내역이에요
              </Title>
              <DescriptionBox>
                <span className="highlight">{diagnosisList.length}개</span>의 증상 감별 내역
              </DescriptionBox>
              <List>
                {diagnosisList.map((diag, idx) => (
                  <DiagnosisCard key={idx} diagnosis={diag} handleNavigate={() => handleNavigate(diag)} />
                ))}
              </List>
            </>
          )}
        </>
      )}
      <ButtonBackground>
        <section className="button-box" onClick={() => navigate("/symptom-type", { state: "list" })}>
          <RoundButton outline="none" backgroundColor={theme.color.green} color={theme.color.grey_900}>
            빠른 증상 감별 시작하기
          </RoundButton>
        </section>
      </ButtonBackground>
    </Layout>
  );
};

export default MyDiagnosis;
