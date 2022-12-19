import { useLayoutEffect, useState } from "react";
import RoundButton from "../../components/roundButton";
import MainHeader from "../../components/header/MainHeader";
import ListComponent from "../../components/diagnosisListPage/ListComponent";
import theme from "../../lib/theme";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { IDiagnosisList } from "../../interfaces/component";
import EmptyPage from "../../components/diagnosisListPage/EmptyPage";
import { useAppSelector, useAppDispatch } from "../../state";
import { DELETE_TOKEN } from "../../state/authSlice";
import { Container, Title, DescriptionBox, List, ButtonBackground } from "./index.style";

const DiagnosisList = () => {
  const navigate = useNavigate();
  const [diagnosisList, setDiagnosisList] = useState([] as IDiagnosisList[]);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);
  const { accessToken } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    const getList = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/diagnosis/results`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (res.status === 404) {
          dispatch(DELETE_TOKEN);
          alert("로그인 만료, 다시 로그인해주세요");
        } else if (res.status !== 204) {
          setDiagnosisList(res.data.diagnosis.reverse());
          setName(res.data.nickname);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        alert("진단목록 로딩 실패, 다시 시도해주세요");
      }
    };

    getList();
  }, []);

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
                  <ListComponent key={idx} diagnosis={diag} />
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

export default DiagnosisList;
