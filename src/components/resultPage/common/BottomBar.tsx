import styled from "styled-components";
import theme from "../../../lib/theme";
import BottomNumber from "./BottomNumber";
import RoundButton from "../../buttons/RoundButton";

const BottomNumbers = styled.section`
  z-index: 5;

  position: fixed;
  bottom: 0;
  width: 100%;

  padding-top: 13.6rem;
  padding-bottom: 4.8rem;

  background: linear-gradient(
    180deg,
    rgba(19, 20, 22, 0) 0%,
    rgba(19, 20, 22, 0.947917) 78.12%,
    #131416 100%
  );
`;
const BottomButton = styled.section`
  z-index: 5;

  position: fixed;
  margin: 0 2rem;
  bottom: 3.4rem;
`;

const BottomBar = ({ curIndex }: { curIndex: number }) => {
  return (
    <>
      {curIndex !== 5 ? (
        <BottomNumbers>
          <BottomNumber curNum={curIndex} />
        </BottomNumbers>
      ) : (
        <BottomButton>
          <RoundButton
            outline="none"
            backgroundColor={theme.color.blue}
            color={theme.color.grey_100}
            text="나의 진단기록장에 저장하기"
          />
        </BottomButton>
      )}
    </>
  );
};

export default BottomBar;
