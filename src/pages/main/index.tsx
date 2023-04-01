import MainModal from "./mainModal";
import MainHeader from "src/components/mainHeader";
import BottomButtons from "./bottomButtons";
import { Container, GuideText, Title, MainImage } from "./index.style";
import useModal from "src/hooks/useModal";
import imageUrl from "src/data/image_url";

const MainPage = () => {
  const { isOpenModal, modalRef, openModal, closeModal } = useModal();

  return (
    <>
      <MainHeader />
      <Container>
        <Title>
          <span className="strong">빠른 증상감별</span>로
          <br />
          <span className="strong">예상 질환</span>을 알아보세요!
        </Title>
        <MainImage>
          <img className="image" alt="main" src={imageUrl.main_page}></img>
        </MainImage>
        <BottomButtons openModal={openModal} />
        {isOpenModal && <MainModal ref={modalRef} closeModal={closeModal} />}
      </Container>
    </>
  );
};

export default MainPage;
