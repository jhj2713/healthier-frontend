import { useLayoutEffect, useState } from "react";
import RoundButton from "src/components/roundButton";
import MainHeader from "src/components/mainHeader";
import DiagnosisCard from "src/components/diagnosisCard";
import theme from "src/lib/theme";
import { useNavigate } from "react-router-dom";
import { IDiagnosisList } from "src/interfaces/component";
import EmptyPage from "./emptyList";
import { useAppSelector, useAppDispatch } from "src/state";
import { DELETE_TOKEN } from "src/state/authSlice";
import { Container, Title, DescriptionBox, List, ButtonBackground } from "./index.style";
import { Diagnosis } from "src/api/diagnosis";

const MyDiagnosis = () => {
  const navigate = useNavigate();
  const [diagnosisList, setDiagnosisList] = useState([] as IDiagnosisList[]);
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
        alert("진단목록 로딩 실패, 다시 시도해주세요");
      }
    };

    getList();
  }, []);

  const handleNavigate = async (diag: IDiagnosisList) => {
    const diagnosisResult = await Diagnosis.getDiagnosisDetail(diag.record.diagnosis_id);

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
      {loading || (
        <>
          {diagnosisList.length === 0 ? (
            <EmptyPage />
          ) : (
            <>
              <Title>
                <span className="highlight">{name}님</span>
                이 저장한
                <br /> 진단 내역이에요
              </Title>
              <DescriptionBox>
                <span className="highlight">{diagnosisList.length}개</span>의 진단내역
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
            빠른 진단 시작하기
          </RoundButton>
        </section>
      </ButtonBackground>
    </Container>
  );
};

export default MyDiagnosis;
