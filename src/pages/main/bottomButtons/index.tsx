import { useNavigate } from "react-router-dom";
import RoundButton from "src/components/roundButton";
import theme from "src/lib/theme";
import { Buttons, ButtonBox } from "./index.style";

const BottomButtons = ({ openModal }: { openModal: () => void }) => {
  const navigate = useNavigate();

  return (
    <Buttons>
      <ButtonBox onClick={() => navigate("/info")}>
        <RoundButton outline="none" backgroundColor={theme.color.green} color={theme.color.grey_800}>
          빠른 증상 감별 시작하기
        </RoundButton>
      </ButtonBox>
      <ButtonBox onClick={openModal}>
        <RoundButton outline="none" backgroundColor={theme.color.blue} color={theme.color.grey_100}>
          나의 건강기록장 보기
        </RoundButton>
      </ButtonBox>
    </Buttons>
  );
};

export default BottomButtons;
