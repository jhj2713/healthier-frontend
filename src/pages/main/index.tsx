import LoginModal from "../../components/modal/LoginModal";
import { useState } from "react";
import ModalContainer from "../../components/modal/ModalContainer";
import MainHeader from "../../components/mainHeader";
import BottomButtons from "./bottomButtons";
import { Container, GuideText, Title, MainImage } from "./index.style";

const MainPage = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <MainHeader />
      <Container>
        <Title>
          <span className="strong">빠른 진단</span>으로
          <br />
          <span className="strong">정확한 증상</span>을 알아보세요!
        </Title>
        <GuideText>
          현재 <span className="highlight">두통</span>과 <span className="highlight">수면장애</span> 진단이 가능해요!
        </GuideText>
        <MainImage>
          <img
            className="image"
            alt="main"
            src="https://healthier.s3.ap-northeast-2.amazonaws.com/client/%ED%99%88+%EC%B2%AD%EC%A7%84%EA%B8%B0.png"
          ></img>
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
