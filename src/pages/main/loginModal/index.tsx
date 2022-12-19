import axios from "axios";
import { SET_TOKEN, DELETE_TOKEN } from "src/state/authSlice";
import { useAppDispatch } from "src/state";
import ModalContainer from "src/components/modalContainer";
import { ILoginModal } from "src/interfaces/modal";
import { forwardRef } from "react";
import { Container, Title, Contents, NoteImage, BottomButtons, LoginButton, Continue } from "./index.style";

const Kakao = (window as any).Kakao;

const LoginModal = forwardRef<HTMLDivElement, ILoginModal>(({ closeModal }, ref) => {
  const dispatch = useAppDispatch();

  const kakaoLogin = () => {
    Kakao.Auth.login({
      scope: "account_email",
      success: async function (authObj: any) {
        try {
          const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/oauth/kakao?access_token=${authObj.access_token}`);
          const token = res.headers.authorization.slice(7);
          dispatch(DELETE_TOKEN);
          dispatch(SET_TOKEN(token));
        } catch (err: any) {
          if (err.code === "ERR_BAD_REQUEST") {
            alert("이메일 사용 동의가 필요합니다");
          } else {
          }
          console.log(err);
          alert("내부 서버 오류, 다시 시도해주세요");
        } finally {
          closeModal();
        }
      },
      fail: function (err: any) {
        console.log(err);
        alert("로그인 에러, 다시 시도해주세요");
      },
    });
  };

  const handleLoginClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    kakaoLogin();
  };

  return (
    <ModalContainer>
      <Container ref={ref}>
        <section className="quit-image" onClick={closeModal}>
          <img alt="quit" src="/images/header/quit.svg" width={32} height={32} />
        </section>
        <Contents>
          <Title>
            로그인을 하면
            <br />
            <span className="highlight">나의 진단 기록장</span>을 이용할 수 있어요
          </Title>
          <NoteImage>
            <img
              className="image"
              alt="login"
              src="https://healthier.s3.ap-northeast-2.amazonaws.com/client/%EC%A7%84%EB%8B%A8%EA%B8%B0%EB%A1%9D_%EB%A1%9C%EA%B7%B8%EC%9D%B8+%EB%AA%A8%EB%8B%AC.png"
            />
          </NoteImage>
        </Contents>
        <BottomButtons>
          <LoginButton onClick={handleLoginClick}>
            <img className="login-image" alt="kakao_login" src="images/login/kakao.webp" />
            카카오 로그인
          </LoginButton>
          <Continue onClick={closeModal}>괜찮아요, 비회원으로 이용할게요</Continue>
        </BottomButtons>
      </Container>
    </ModalContainer>
  );
});

export default LoginModal;
