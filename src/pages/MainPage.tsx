import styled from "styled-components";
import LoginModal from "../components/modal/LoginModal";
import { useState } from "react";
import ModalContainer from "../components/modal/ModalContainer";
import MainHeader from "../components/header/MainHeader";
import { Heading_3 } from "../lib/fontStyle";
import BottomButtons from "../components/mainPage/BottomButtons";

const Container = styled.main`
  padding-top: 5.6rem;
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
const MainImage = styled.section`
  position: relative;
  margin-top: 5rem;

  display: flex;
  justify-content: center;

  overflow: scroll;
`;
const Image = styled.img`
  //height: calc(100% - 28.9rem);
  width: calc(100vw - 8rem);
`;
const GuideText = styled.section`
  margin-top: 0.8rem;
  margin-left: 2.5rem;

  font-size: 1.5rem;
  font-weight: 200;
  line-height: 150%;
  letter-spacing: 0.015rem;

  color: ${({ theme }) => theme.color.grey_300};
`;
const Highlight = styled.span`
  color: ${({ theme }) => theme.color.green};
`;

const MainPage = () => {
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
          <Image
            alt="main"
            src="https://healthier.s3.ap-northeast-2.amazonaws.com/client/%ED%99%88+%EC%B2%AD%EC%A7%84%EA%B8%B0.png"
          ></Image>
        </MainImage>
        <BottomButtons setModal={setModal} />
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
