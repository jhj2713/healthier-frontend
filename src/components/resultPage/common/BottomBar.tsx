import styled from "styled-components";
import theme from "../../../lib/theme";
import BottomNumber from "./BottomNumber";
import RoundButton from "../../buttons/RoundButton";
import { IBottomBar } from "../../../interfaces/resultPage";

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
}: IBottomBar) => {
  const handleSave = () => {
    // 로그인되지 않은 경우
    setModal(true);

    // 로그인되어있는 경우
    // setLoading(true);
    // 저장 api 호출
    // 시간 지나면 navigate("/");
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
