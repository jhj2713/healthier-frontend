import { useEffect, useState } from "react";
import styled from "styled-components";
import RoundButton from "../components/buttons/RoundButton";
import MainHeader from "../components/header/MainHeader";
import ListComponent from "../components/diagnosisListPage/ListComponent";
import theme from "../lib/theme";
import { useNavigate } from "react-router-dom";
import { Description, Heading_3 } from "../lib/fontStyle";
import axios from "axios";
import { IDiagnosisList } from "../interfaces/component";
import EmptyPage from "../components/diagnosisListPage/EmptyPage";
import { useAppSelector } from "../state";

const Container = styled.section`
  padding-top: 5.6rem;
`;
const ButtonBackground = styled.section`
  position: fixed;
  bottom: 0;

  display: flex;
  flex-direction: column;

  padding: 10.4rem 2rem 3rem 2rem;

  background: linear-gradient(
    180deg,
    rgba(19, 20, 22, 0) 0%,
    rgba(19, 20, 22, 0.947917) 78.12%,
    #131416 100%
  );
  pointer-events: none;
`;
const ButtonBox = styled.section`
  pointer-events: auto;
`;
const Title = styled(Heading_3)`
  color: ${({ theme }) => theme.color.grey_200};

  margin: 4rem 2.4rem 0 2.4rem;
`;
const DescriptionBox = styled(Description)`
  text-align: end;

  color: ${({ theme }) => theme.color.grey_500};

  margin-bottom: 1.2rem;
  margin-right: 2.4rem;

  font-size: 1.3rem;
`;
const Highlight = styled.span<{ type: string }>`
  color: ${({ theme, type }) =>
    type === "title" ? theme.color.green : theme.color.sub_green};
`;
const List = styled.section`
  margin: 0 2.4rem 13rem 2.4rem;
`;

const DiagnosisList = () => {
  const navigate = useNavigate();
  const [diagnosisList, setDiagnosisList] = useState<IDiagnosisList[]>([]);
  const [name, setName] = useState("");
  const { accessToken } = useAppSelector((state) => state.auth);

  useEffect(() => {
    const getList = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/api/diagnosis/results`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        if (res.status !== 204) {
          setName("홍길동");
          console.log(res);
          setDiagnosisList(res.data.diagnosis.reverse());
        }
      } catch (error) {
        console.log(error);
        alert("진단목록 로딩 실패");
      }
    };

    getList();
  }, []);

  return (
    <Container>
      <MainHeader />
      {diagnosisList.length === 0 ? (
        <EmptyPage />
      ) : (
        <>
          <Title>
            <Highlight type="title">{name}님</Highlight>이 저장한
            <br /> 진단 내역이에요
          </Title>
          <DescriptionBox>
            <Highlight type="description">{diagnosisList.length}개</Highlight>의
            진단내역
          </DescriptionBox>
          <List>
            {diagnosisList.map((diag, idx) => (
              <ListComponent key={idx} diagnosis={diag} />
            ))}
          </List>
        </>
      )}
      <ButtonBackground>
        <ButtonBox onClick={() => navigate("/info")}>
          <RoundButton
            outline="none"
            backgroundColor={theme.color.green}
            color={theme.color.grey_900}
            text="빠른 진단 시작하기"
          />
        </ButtonBox>
      </ButtonBackground>
    </Container>
  );
};

export default DiagnosisList;
