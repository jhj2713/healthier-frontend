import styled from "styled-components";
import theme from "../../../lib/theme";
import BottomNumber from "./BottomNumber";
import RoundButton from "../../buttons/RoundButton";
import { IBottomBar } from "../../../interfaces/resultPage";
import { useAppSelector } from "../../../state";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BottomContainer = styled.section<{ curIndex: number }>`
  z-index: 5;

  position: fixed;
  bottom: 0;
  width: 100%;

  padding-top: 12rem;
  padding-bottom: 4rem;

  background: linear-gradient(
    180deg,
    rgba(19, 20, 22, 0) 0%,
    rgba(19, 20, 22, 0.947917) 78.12%,
    #131416 100%
  );

  pointer-events: none;
`;
const BottomButton = styled.section`
  z-index: 5;

  position: fixed;
  margin: 0 2rem;
  bottom: 3rem;

  pointer-events: auto;
`;

const BottomBar = ({
  curIndex,
  totalCount,
  setModal,
  setLoading,
  isSaved,
  resultId,
}: IBottomBar) => {
  const { authenticated } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleSave = () => {
    if (authenticated) {
      // 로그인된 경우
      setLoading(true);

      // 저장 api 호출
      axios
        .patch(
          `${process.env.REACT_APP_SERVER_URL}/api/diagnosis/sleepdisorder/results`,
          { diagnosis_id: resultId }
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
            <RoundButton
              outline="none"
              backgroundColor={theme.color.blue}
              color={theme.color.grey_100}
              text="나의 진단기록장에 저장하기"
            />
          </section>
        </BottomButton>
      )}
    </BottomContainer>
  );
};

export default BottomBar;
