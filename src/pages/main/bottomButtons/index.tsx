import { useNavigate } from "react-router-dom";
import * as Styled from "./index.style";

const BottomButtons = ({ openModal }: { openModal: () => void }) => {
  const navigate = useNavigate();

  return (
    <Styled.Container>
      <Styled.ButtonContainer gap={0.5} style={{ marginTop: "1.7rem" }} onClick={() => navigate("/appointment")}>
        <img alt="go to diagnose" src="/images/main/search.svg" />
        <Styled.ButtonText>병원 찾기</Styled.ButtonText>
      </Styled.ButtonContainer>

      <Styled.ButtonContainer gap={0.7} onClick={() => navigate("/info")}>
        <Styled.Diagnose>
          <img alt="go to diagnose" src="/images/main/diagnose.svg" />
        </Styled.Diagnose>
        <Styled.ButtonText>빠른 증상감별</Styled.ButtonText>
      </Styled.ButtonContainer>

      <Styled.ButtonContainer gap={0.5} style={{ marginTop: "1.7rem" }} onClick={openModal}>
        <img alt="go to diagnose" src="/images/main/bookmark.svg" />
        <Styled.ButtonText>건강 기록장</Styled.ButtonText>
      </Styled.ButtonContainer>
    </Styled.Container>
  );
};

export default BottomButtons;
