import theme from "../../../lib/theme";
import RoundButton from "../../../components/roundButton";
import { useNavigate } from "react-router-dom";
import { Buttons, ButtonBox } from "./index.style";

const BottomButtons = ({ openModal }: { openModal: () => void }) => {
  const navigate = useNavigate();

  return (
    <Buttons>
      <ButtonBox onClick={() => navigate("/info")}>
        <RoundButton outline="none" backgroundColor={theme.color.green} color={theme.color.grey_800}>
          빠른 진단 시작하기
        </RoundButton>
      </ButtonBox>
      <ButtonBox onClick={openModal}>
        <RoundButton outline="none" backgroundColor={theme.color.blue} color={theme.color.grey_100}>
          나의 진단기록장 보기
        </RoundButton>
      </ButtonBox>
    </Buttons>
  );
};

export default BottomButtons;
