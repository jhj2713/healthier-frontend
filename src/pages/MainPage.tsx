import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import RoundButton from "../components/buttons/RoundButton";
import LoginModal from "../components/modal/LoginModal";
import theme from "../lib/theme";
import { useState } from "react";
import ModalContainer from "../components/modal/ModalContainer";
import MainHeader from "../components/header/MainHeader";
import { Heading_3 } from "../lib/fontStyle";

const Container = styled.main`
  padding-top: 9.6rem;
  height: calc(var(--vh, 1vh) * 100 - 9.6rem);

  color: ${({ theme }) => theme.color.grey_100};
`;
const Title = styled(Heading_3)`
  margin-top: 4rem;
  margin-left: 2.4rem;
`;
const Strong = styled.span`
  font-weight: 500;
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
const MainImage = styled.section`
  height: calc(100% - 15.3rem - 17.6rem);
  margin: 2rem 5rem 0 5rem;
`;
const Image = styled.section`
  height: 100%;
  background: ${({ theme }) => theme.color.blue};
  opacity: 0.5;
`;
const GuideText = styled.section`
  margin-top: 0.8rem;
  margin-left: 2.5rem;

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
          <br />
          <Strong>정확한 증상</Strong>을 알아보세요!
        </Title>
        <GuideText>
          현재 <Highlight>두통</Highlight>과 <Highlight>수면장애</Highlight>{" "}
          진단이 가능해요!
        </GuideText>
        <MainImage>
          <Image></Image>
        </MainImage>
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
          <ModalContainer setModal={setModal}>
            <LoginModal setModal={setModal} />
          </ModalContainer>
        )}
      </Container>
    </>
  );
};

export default MainPage;
