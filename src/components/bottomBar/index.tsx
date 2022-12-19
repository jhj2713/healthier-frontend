import theme from "../../lib/theme";
import BottomNumber from "../bottomNumber";
import RoundButton from "../roundButton";
import { IBottomBar } from "../../interfaces/resultPage";
import { useAppSelector } from "../../state";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BottomContainer, BottomButton } from "./index.style";

const BottomBar = ({ curIndex, totalCount, setModal, setLoading, isSaved, resultId }: IBottomBar) => {
  const { authenticated, accessToken } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleSave = () => {
    if (authenticated) {
      // 로그인된 경우
      setLoading(true);

      // 저장 api 호출
      axios
        .patch(
          `${process.env.REACT_APP_SERVER_URL}/api/diagnosis/results`,
          {
            diagnosis_id: resultId,
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then(() => {
          setTimeout(() => navigate("/"), 3000);
        });
    } else {
      // 로그인되지 않은 경우
      setModal(true);
    }
  };

  return (
    <BottomContainer curIndex={curIndex}>
      {curIndex !== totalCount || isSaved ? (
        <BottomNumber curIndex={curIndex} totalCount={totalCount} />
      ) : (
        <BottomButton>
          <section onClick={handleSave}>
            <RoundButton outline="none" backgroundColor={theme.color.blue} color={theme.color.grey_100}>
              나의 진단기록장에 저장하기
            </RoundButton>
          </section>
        </BottomButton>
      )}
    </BottomContainer>
  );
};

export default BottomBar;
