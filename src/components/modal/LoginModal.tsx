import { Dispatch } from "react";
import styled from "styled-components";
import { Body_4, Heading_5 } from "../../lib/fontStyle";

const Container = styled.section`
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
  font-weight: 500;

  color: ${({ theme }) => theme.color.green};
`;
const Title = styled(Heading_5)`
  color: ${({ theme }) => theme.color.grey_200};
  text-align: center;

  margin-top: 1.2rem;
`;
const Contents = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
  width: 100%;
`;
const NoteImage = styled.section`
  height: 21.7rem;
  width: 26rem;
  margin-top: 1.6rem;
`;
const Image = styled.section`
  height: 100%;
  width: 100%;
  background: ${({ theme }) => theme.color.grey_900};
  opacity: 0.5;
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
  const handleLogin = () => {
    console.log("로그인");
    // setModal(false);
    // 로그인 api 호출
  };

  return (
    <Container>
      <QuitImage onClick={() => setModal(false)}>
        <img alt="quit" src="/images/header/quit.svg" width={32} height={32} />
      </QuitImage>
      <Contents>
        <Title>
          로그인을 하면
          <br />
          <Highlight>나의 진단 기록장</Highlight>을 이용할 수 있어요
        </Title>
        <NoteImage>
          <Image></Image>
        </NoteImage>
      </Contents>
      <BottomButtons>
        <section onClick={handleLogin}>
          <LoginButton
            alt="kakao_login"
            src="images/login/kakao_login_large_wide.png"
          />
        </section>
        <Continue onClick={() => setModal(false)}>
          괜찮아요, 비회원으로 이용할게요
        </Continue>
      </BottomButtons>
    </Container>
  );
};

export default LoginModal;
