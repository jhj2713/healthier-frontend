import { useNavigate } from "react-router-dom";
import { IResultModal } from "src/interfaces/modal";
import axios from "axios";
import { useAppDispatch } from "src/state";
import { SET_TOKEN, DELETE_TOKEN } from "src/state/authSlice";
import ModalContainer from "src/components/modalContainer";
import { forwardRef } from "react";
import { Container, Title, Description, Continue, NoteImage, BottomButtons } from "./index.style";

const Kakao = (window as any).Kakao;

const ResultModal = forwardRef<HTMLDivElement, IResultModal>(({ closeModal, setLoading, resultId }, ref) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const kakaoLogin = () => {
    Kakao.Auth.login({
      success: async function (authObj: any) {
        const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/oauth/kakao?access_token=${authObj.access_token}`);
        const token = res.headers.authorization.slice(7);
        dispatch(DELETE_TOKEN);
        dispatch(SET_TOKEN(token));
        closeModal();
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
    <ModalContainer>
      <Container ref={ref}>
        <section className="quit-image" onClick={closeModal}>
          <img alt="quit" src="/images/header/quit.svg" width={32} height={32} />
        </section>
        <section className="contents">
          <Description>해당 진단결과를 다시 보고 싶나요?</Description>
          <Title>
            진단기록은 로그인 후
            <br />
            홈화면에서 볼 수 있어요
          </Title>
          <NoteImage>
            <img
              className="image"
              alt="login"
              src="https://healthier.s3.ap-northeast-2.amazonaws.com/client/%EC%A7%84%EB%8B%A8%EA%B8%B0%EB%A1%9D_%EB%A1%9C%EA%B7%B8%EC%9D%B8+%EB%AA%A8%EB%8B%AC.png"
            />
          </NoteImage>
        </section>
        <BottomButtons>
          <button className="login-button" onClick={handleLoginClick}>
            <img className="login-image" alt="kakao_login" src="images/login/kakao.webp" />
            카카오 로그인
          </button>
          <Continue onClick={() => navigate("/loading")}>괜찮아요, 다음에 할게요</Continue>
        </BottomButtons>
      </Container>
    </ModalContainer>
  );
});

export default ResultModal;
