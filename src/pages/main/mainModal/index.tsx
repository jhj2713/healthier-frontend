import axios from "axios";
import { SET_TOKEN, DELETE_TOKEN } from "src/state/authSlice";
import { useAppDispatch } from "src/state";
import { IMainModal } from "src/interfaces/modal";
import { forwardRef } from "react";
import { Title } from "./index.style";
import LoginModal from "src/components/loginModal";

const Kakao = (window as any).Kakao;

const MainModal = forwardRef<HTMLDivElement, IMainModal>(({ closeModal }, ref) => {
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

  return (
    <LoginModal
      ref={ref}
      title={
        <Title>
          로그인을 하면
          <br />
          <span className="highlight">나의 진단 기록장</span>을 이용할 수 있어요
        </Title>
      }
      continueText="괜찮아요, 비회원으로 이용할게요"
      handleLogin={kakaoLogin}
      handleContinue={closeModal}
      closeModal={closeModal}
    />
  );
});
MainModal.displayName = "MainModal";

export default MainModal;
