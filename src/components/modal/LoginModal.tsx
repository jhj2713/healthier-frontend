import { Dispatch } from "react";
import styled from "styled-components";
import { Body_4, Heading_5 } from "../../lib/fontStyle";

const Container = styled.section`
  position: relative;

  width: calc(100vw - 4rem);
  height: 48.2rem;

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

  width: calc(100vw - 4rem);
  height: 48.2rem;
`;
const QuitImage = styled.section`
  display: flex;
  justify-content: flex-end;

  margin-top: 1.4rem;
  margin-right: 1.4rem;
`;
const Highlight = styled.span`
  font-weight: 300;

  color: ${({ theme }) => theme.color.green};
`;
const Title = styled(Heading_5)`
  color: ${({ theme }) => theme.color.grey_200};
  font-weight: 200;
  text-align: center;

  margin-top: 2.4rem;
`;
const Contents = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const NoteImage = styled.img`
  transform: rotate(-10deg);

  width: 16.6rem;
  height: 18.1rem;

  margin-top: 2.2rem;
`;
const BottomButtons = styled.section`
  position: absolute;
  bottom: 2.4rem;

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Continue = styled(Body_4)`
  color: ${({ theme }) => theme.color.grey_200};

  margin-top: 1.4rem;
`;
const LoginButton = styled.img`
  width: calc(100vw - 6.8rem);
`;

const LoginModal = ({ setModal }: { setModal: Dispatch<boolean> }) => {
  return (
    <Container>
      <ModalBox>
        <QuitImage onClick={() => setModal(false)}>
          <img alt="quit" src="/images/header/quit.svg" />
        </QuitImage>
        <Contents>
          <Title>
            로그인을 하면
            <br />
            <Highlight>나의 진단 기록장</Highlight>을 이용할 수 있어요
          </Title>
          <NoteImage alt="note" src="/images/note.png" />
        </Contents>
        <BottomButtons>
          <LoginButton
            alt="kakao_login"
            src="images/login/kakao_login_large_wide.png"
          />
          <Continue onClick={() => setModal(false)}>
            괜찮아요, 비회원으로 이용할게요
          </Continue>
        </BottomButtons>
      </ModalBox>
    </Container>
  );
};

export default LoginModal;
