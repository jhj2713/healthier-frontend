import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import RoundButton from "../components/buttons/RoundButton";
import LoginModal from "../components/modal/LoginModal";
import theme from "../lib/theme";
import { useState } from "react";
import ModalContainer from "../components/modal/ModalContainer";
import MainHeader from "../components/header/MainHeader";

const Container = styled.main`
  padding-top: 9.6rem;
  height: calc(100vh - 9.6rem);

  color: ${({ theme }) => theme.color.grey_100};
`;
const Title = styled.section`
  font-size: 2.2rem;
  font-weight: 300;
  line-height: 140%;

  margin-top: 4rem;
  margin-left: 2.4rem;
`;
const Buttons = styled.section`
  position: fixed;
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
const Strong = styled.span`
  font-weight: 500;
`;
const MainImage = styled.section``;
const StethoscopeImage = styled.img`
  height: 29.5rem;
  width: 22.2rem;

  margin-bottom: 1.4rem;
`;
const GuideText = styled.section`
  text-align: center;

  font-size: 1.3rem;
  font-weight: 200;
  line-height: 150%;
  letter-spacing: 0.015rem;

  color: ${({ theme }) => theme.color.grey_300};
`;
const Highlight = styled.span`
  color: ${({ theme }) => theme.color.green};
`;

const MainPage = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);

  return (
    <>
      <MainHeader />
      <Container>
        <Title>
          <Strong>빠른 진단</Strong>으로
          <br />내 몸의 <Strong>정확한 증상</Strong>을
          <br />
          알아보세요!
        </Title>
        <MainImage>
          <StethoscopeImage alt="stethoscope" src="/images/stethoscope.png" />
        </MainImage>
        <GuideText>
          현재 <Highlight>두통</Highlight>과 <Highlight>수면장애</Highlight>{" "}
          진단이 가능해요!
        </GuideText>
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
              text={"로그인 후 진단기록장 보기"}
            />
          </ButtonBox>
        </Buttons>
        {modal && (
          <ModalContainer>
            <LoginModal setModal={setModal} />
          </ModalContainer>
        )}
      </Container>
    </>
  );
};

export default MainPage;
