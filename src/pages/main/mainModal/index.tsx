import { SET_TOKEN, DELETE_TOKEN } from "src/state/authSlice";
import { useAppDispatch } from "src/state";
import { IKakaoToken, IMainModal } from "src/interfaces/modal";
import { forwardRef } from "react";
import { Title } from "./index.style";
import LoginModal from "src/components/loginModal";
import { Auth } from "src/api/auth";
import { AxiosError } from "axios";

const Kakao = (window as any).Kakao;

const MainModal = forwardRef<HTMLDivElement, IMainModal>(({ closeModal }, ref) => {
  const dispatch = useAppDispatch();

  const kakaoLogin = () => {
    Kakao.Auth.login({
      scope: "account_email",
      success: async function (resToken: IKakaoToken) {
        try {
          const headers = await Auth.login(resToken.access_token);
          const token = headers.authorization.slice(7);

          dispatch(DELETE_TOKEN);
          dispatch(SET_TOKEN(token));
        } catch (error) {
          if ((error as AxiosError).code === "ERR_BAD_REQUEST") {
            alert("이메일 사용 동의가 필요합니다");
          } else {
            alert("내부 서버 오류, 다시 시도해주세요");
          }
        } finally {
          closeModal();
        }
      },
      fail: function () {
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
          <span className="highlight">나의 건강기록장</span>을 이용할 수 있어요
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
