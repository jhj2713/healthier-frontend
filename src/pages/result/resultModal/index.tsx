import { useNavigate } from "react-router-dom";
import { IKakaoToken, IResultModal } from "src/interfaces/modal";
import { useAppDispatch } from "src/state";
import { SET_TOKEN, DELETE_TOKEN } from "src/state/authSlice";
import { forwardRef } from "react";
import { Title, Description } from "./index.style";
import LoginModal from "src/components/loginModal";
import { Auth } from "src/api/auth";
import { Diagnosis } from "src/api/diagnosis";

const Kakao = (window as any).Kakao;

const ResultModal = forwardRef<HTMLDivElement, IResultModal>(({ closeModal, setLoading, resultId }, ref) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const kakaoLogin = () => {
    Kakao.Auth.login({
      success: async function (resToken: IKakaoToken) {
        const headers = await Auth.login(resToken.access_token);
        const token = headers.authorization.slice(7);

        dispatch(DELETE_TOKEN);
        dispatch(SET_TOKEN(token));

        closeModal();
        setLoading(true);

        await Diagnosis.patchDiagnosis({ diagnosis_id: resultId }, token);

        const timer = setTimeout(() => {
          navigate("/");
          clearTimeout(timer);
        }, 3000);
      },
      fail: function (err: Error) {
        console.log(err);
      },
    });
  };

  return (
    <LoginModal
      ref={ref}
      title={
        <>
          <Description>해당 감별 결과를 다시 보고 싶나요?</Description>
          <Title>
            감별진단 기록은 로그인 후
            <br />
            홈화면에서 볼 수 있어요
          </Title>
        </>
      }
      continueText="괜찮아요, 다음에 할게요"
      handleLogin={kakaoLogin}
      closeModal={closeModal}
      handleContinue={() => navigate("/loading")}
    />
  );
});
ResultModal.displayName = "ResultModal";

export default ResultModal;
