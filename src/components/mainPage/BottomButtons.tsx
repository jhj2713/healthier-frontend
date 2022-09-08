import { Dispatch } from "react";
import styled from "styled-components";
import theme from "../../lib/theme";
import RoundButton from "../buttons/RoundButton";
import { useNavigate } from "react-router-dom";

const Buttons = styled.section`
  position: fixed;
  bottom: 0;

  display: flex;
  flex-direction: column;

  margin: 0 2rem;
  padding-top: 6.8rem;
  padding-bottom: 3rem;

  background: linear-gradient(180deg, rgba(19, 20, 22, 0) 0%, #131416 49.48%);
`;
const ButtonBox = styled.section`
  & + & {
    margin-top: 1.2rem;
  }
`;

const BottomButtons = ({ setModal }: { setModal: Dispatch<boolean> }) => {
  const navigate = useNavigate();

  return (
    <Buttons>
      <ButtonBox onClick={() => navigate("/info")}>
        <RoundButton outline="none" backgroundColor={theme.color.green} color={theme.color.grey_800} text={"빠른 진단 시작하기"} />
      </ButtonBox>
      <ButtonBox
        onClick={() => {
          setModal(true);
        }}
      >
        <RoundButton outline="none" backgroundColor={theme.color.blue} color={theme.color.grey_100} text={"나의 진단기록장 보기"} />
      </ButtonBox>
    </Buttons>
  );
};

export default BottomButtons;
