import { useNavigate } from "react-router-dom";
import { IResultModal } from "src/interfaces/modal";
import axios from "axios";
import { useAppDispatch } from "src/state";
import { SET_TOKEN, DELETE_TOKEN } from "src/state/authSlice";
import { forwardRef } from "react";
import { Title, Description } from "./index.style";
import LoginModal from "src/components/loginModal";

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

  return (
    <LoginModal
      ref={ref}
      title={
        <>
          <Description>해당 진단결과를 다시 보고 싶나요?</Description>
          <Title>
            진단기록은 로그인 후
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
