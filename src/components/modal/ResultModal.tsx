import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IResultModal } from "../../interfaces/modal";
import { Body_4, Heading_5 } from "../../lib/fontStyle";
import axios from "axios";
import { useAppDispatch } from "../../state";
import { SET_TOKEN, DELETE_TOKEN } from "../../state/authSlice";

const Container = styled.section`
  position: absolute;

  width: calc(var(--vw, 1vw) * 100 - 4rem);
  height: 48.2rem;
`;
const QuitImage = styled.section`
  display: flex;
  justify-content: flex-end;

  margin-top: 1.4rem;
  margin-right: 1.4rem;

  cursor: pointer;
`;
const Description = styled(Body_4)`
  color: ${({ theme }) => theme.color.grey_200};

  margin-top: 1.2rem;
`;
const Title = styled(Heading_5)`
  color: ${({ theme }) => theme.color.grey_200};
  text-align: center;

  margin-top: 0.4rem;

  font-size: 2.2rem;
`;
const Contents = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
  width: 100%;
`;
const NoteImage = styled.section`
  height: 19.6rem;

  margin-top: 1.6rem;

  display: flex;
  justify-content: center;
`;
const Image = styled.img`
  height: 100%;
`;
const BottomButtons = styled.section`
  position: absolute;
  bottom: 2.2rem;

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Continue = styled(Body_4)`
  color: ${({ theme }) => theme.color.grey_200};

  margin-top: 1.4rem;

  cursor: pointer;
`;
const LoginButton = styled.button`
  width: calc(var(--vw, 1vw) * 100 - 6.8rem);
  height: 4.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0.6rem;
  border: none;
  background-color: #fee500;

  font-size: 1.5rem;

  color: #000000;

  cursor: pointer;
`;
const LoginImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  left: 30px;
`;

const Kakao = (window as any).Kakao;

const ResultModal = ({ setModal, setLoading, resultId }: IResultModal) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const kakaoLogin = () => {
    Kakao.Auth.login({
      success: async function (authObj: any) {
        const res = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/api/oauth/kakao?access_token=${authObj.access_token}`
        );
        const token = res.headers.authorization.slice(7);
        dispatch(DELETE_TOKEN);
        dispatch(SET_TOKEN(token));
        setModal(false);
        setLoading(true);

        axios
          .patch(
            `${process.env.REACT_APP_SERVER_URL}/api/diagnosis/results`,
            {
              diagnosis_id: resultId,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then(() => {
            setTimeout(() => navigate("/"), 3000);
          });
      },
      fail: function (err: any) {
        console.log(err);
      },
    });
  };

  const handleLoginClick = () => {
    // 로그인 api 호출 후 저장 api 호출
    kakaoLogin();
  };

  return (
    <Container>
      <QuitImage onClick={() => setModal(false)}>
        <img alt="quit" src="/images/header/quit.svg" width={32} height={32} />
      </QuitImage>
      <Contents>
        <Description>해당 진단결과를 다시 보고 싶나요?</Description>
        <Title>
          진단기록은 로그인 후
          <br />
          홈화면에서 볼 수 있어요
        </Title>
        <NoteImage>
          <Image
            alt="login"
            src="https://healthier.s3.ap-northeast-2.amazonaws.com/client/%EC%A7%84%EB%8B%A8%EA%B8%B0%EB%A1%9D_%EB%A1%9C%EA%B7%B8%EC%9D%B8+%EB%AA%A8%EB%8B%AC.png"
          />
        </NoteImage>
      </Contents>
      <BottomButtons>
        <LoginButton onClick={handleLoginClick}>
          <LoginImg alt="kakao_login" src="images/login/kakao.webp" />
          카카오 로그인
        </LoginButton>
        <Continue onClick={() => navigate("/loading")}>
          괜찮아요, 다음에 할게요
        </Continue>
      </BottomButtons>
    </Container>
  );
};

export default ResultModal;
