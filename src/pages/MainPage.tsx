import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import RoundButton from "../components/buttons/RoundButton";
import Modal from "../components/modal/Modal";
import theme from "../lib/theme";
import { useState } from "react";
import ModalContainer from "../components/modal/ModalContainer";

const Container = styled.main`
  color: ${({ theme }) => theme.color.grey_100};
`;
const Title = styled.section`
  font-size: 2.2rem;
  font-weight: bolder;
  line-height: 150%;

  margin-top: 4rem;
  margin-left: 2.4rem;
`;
const Buttons = styled.section`
  position: absolute;
  bottom: 0;

  display: flex;
  flex-direction: column;

  margin: 3rem 2rem;
`;
const ButtonBox = styled.section`
  & + & {
    margin-top: 1.2rem;
  }
`;
const Highlight = styled.span``;

const MainPage = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);

  return (
    <Container>
      <Title>
        <Highlight>빠른 진단</Highlight>으로
        <br />내 몸의 <Highlight>정확한 증상</Highlight>을
        <br />
        알아보세요!
      </Title>
      <Buttons>
        <ButtonBox onClick={() => navigate("/info")}>
          <RoundButton
            outline="none"
            backgroundColor={theme.color.green}
            color={theme.color.grey_800}
            text={"빠른 진단 시작하기"}
          />
        </ButtonBox>
        <ButtonBox
          onClick={() => {
            //navigate("/result", { state: { title: "일주기 리듬 수면 장애" } })
            setModal(true);
          }}
        >
          <RoundButton
            outline="none"
            backgroundColor={theme.color.blue}
            color={theme.color.grey_100}
            text={"나의 진단기록장 보기"}
          />
        </ButtonBox>
      </Buttons>
      {modal && (
        <ModalContainer>
          <Modal setModal={setModal} />
        </ModalContainer>
      )}
    </Container>
  );
};

export default MainPage;
