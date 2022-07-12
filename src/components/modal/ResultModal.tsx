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
const Description = styled(Body_4)`
  color: ${({ theme }) => theme.color.grey_200};

  margin-top: 1.2rem;
`;
const Title = styled(Heading_5)`
  color: ${({ theme }) => theme.color.grey_200};
  text-align: center;

  margin-top: 0.4rem;
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
  bottom: 2.2rem;

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

const ResultModal = ({ setModal }: { setModal: Dispatch<boolean> }) => {
  return (
    <Container>
      <QuitImage onClick={() => setModal(false)}>
        <img alt="quit" src="/images/header/quit.svg" width={32} height={32} />
      </QuitImage>
      <Contents>
        <Description>해당 진단결과를 다시 보고 싶나요?</Description>
        <Title>
          진단기록은 로그인 후
          <br />
          홈화면에서 볼 수 있어요
        </Title>
        <NoteImage>
          <Image></Image>
        </NoteImage>
      </Contents>
      <BottomButtons>
        <LoginButton
          alt="kakao_login"
          src="images/login/kakao_login_large_wide.png"
        />
        <Continue onClick={() => setModal(false)}>
          괜찮아요, 다음에 할게요
        </Continue>
      </BottomButtons>
    </Container>
  );
};

export default ResultModal;
