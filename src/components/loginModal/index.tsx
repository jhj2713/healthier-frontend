import ModalContainer from "src/components/modalContainer";
import { ILoginModal } from "src/interfaces/modal";
import { forwardRef } from "react";
import { Container, Contents, NoteImage, BottomButtons, LoginButton, Continue } from "./index.style";
import imageUrl from "src/data/image_url";

const LoginModal = forwardRef<HTMLDivElement, ILoginModal>(({ title, continueText, closeModal, handleContinue, handleLogin }, ref) => {
  return (
    <ModalContainer>
      <Container ref={ref}>
        <section className="exit-image" onClick={closeModal}>
          <img alt="exit" src="/images/header/exit.svg" width={32} height={32} />
        </section>
        <Contents>
          {title}
          <NoteImage>
            <img className="image" alt="login" src={imageUrl.login_modal} />
          </NoteImage>
        </Contents>
        <BottomButtons>
          <LoginButton onClick={handleLogin}>
            <img className="login-image" alt="kakao_login" src="images/login/kakao.webp" />
            카카오 로그인
          </LoginButton>
          <Continue onClick={handleContinue}>{continueText}</Continue>
        </BottomButtons>
      </Container>
    </ModalContainer>
  );
});
LoginModal.displayName = "LoginModal";

export default LoginModal;
