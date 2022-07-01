import { Dispatch } from "react";
import styled from "styled-components";

const Container = styled.section`
  position: relative;

  width: calc(100vw - 4.8rem);
  height: calc(100vh - 34.1rem);

  margin-top: 18rem;
  margin-left: 2.4rem;

  border-radius: 0.8rem;

  background: radial-gradient(
      181.28% 184.02% at -58.92% 120.58%,
      rgba(210, 250, 100, 0.9) 0%,
      rgba(84, 100, 243, 0) 100%
    ),
    #5464f2;
`;
const ModalBox = styled.section`
  position: absolute;

  width: calc(100vw - 4.8rem);
  height: calc(100vh - 34.1rem);
`;
const QuitImage = styled.section`
  display: flex;
  justify-content: flex-end;

  margin-top: 1.4rem;
  margin-right: 1.4rem;
`;
const Description = styled.section`
  font-size: 1.3rem;
  line-height: 150%;

  color: ${({ theme }) => theme.color.grey_200};

  margin-top: 1.2rem;
`;
const Title = styled.section`
  font-size: 1.8rem;
  font-weight: bolder;
  line-height: 140%;

  color: ${({ theme }) => theme.color.grey_200};

  text-align: center;

  margin-top: 0.4rem;
`;
const Contents = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const BottomButtons = styled.section`
  position: absolute;
  bottom: 0;

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Continue = styled(Description)`
  margin-bottom: 2.4rem;
`;
const LoginButton = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: calc(100vw - 7.6rem);
  height: 5.2rem;

  background-color: ${({ theme }) => theme.color.sub_blue};

  border-radius: 3rem;
  box-sizing: border-box;
`;
const ButtonText = styled.section`
  font-size: 1.5rem;
  font-weight: bolder;
  line-height: 150%;

  color: ${({ theme }) => theme.color.blue};
`;

const Modal = ({ setModal }: { setModal: Dispatch<boolean> }) => {
  return (
    <Container>
      <ModalBox>
        <QuitImage onClick={() => setModal(false)}>
          <img src="/images/header/quit.svg" />
        </QuitImage>
        <Contents>
          <Description>해당 진단결과를 다시 보고 싶나요?</Description>
          <Title>
            진단기록은 로그인 후<br /> 홈화면에서 볼 수 있어요
          </Title>
        </Contents>
        <BottomButtons>
          <LoginButton>
            <ButtonText>로그인 하러 갈래요</ButtonText>
          </LoginButton>
          <Continue>괜찮아요, 다음에 할게요</Continue>
        </BottomButtons>
      </ModalBox>
    </Container>
  );
};

export default Modal;
