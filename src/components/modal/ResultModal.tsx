import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IResultModal } from "../../interfaces/modal";
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

  font-size: 2.2rem;
`;
const Contents = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
  width: 100%;
`;
const NoteImage = styled.section`
  height: 19.6rem;

  margin-top: 1.6rem;

  display: flex;
  justify-content: center;
`;
const Image = styled.img`
  height: 100%;
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
const LoginButton = styled.button`
  width: calc(100vw - 6.8rem);
  height: 4.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0.6rem;
  border: none;
  background-color: #fee500;

  font-size: 1.5rem;

  color: #000000;
`;
const LoginImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  left: 30px;
`;

const ResultModal = ({ setModal, setLoading }: IResultModal) => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    setModal(false);
    setLoading(true);

    // 로그인 api 호출 후 저장 api 호출
    // 시간 지나면 navigate("/");
  };

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
          <Image alt="login" src="/images/modal/LoginModalImage.webp" />
        </NoteImage>
      </Contents>
      <BottomButtons>
        <LoginButton onClick={handleLoginClick}>
          <LoginImg alt="kakao_login" src="images/login/kakao.png" />
          카카오 로그인
        </LoginButton>
        <Continue onClick={() => navigate("/loading")}>
          괜찮아요, 다음에 할게요
        </Continue>
      </BottomButtons>
    </Container>
  );
};

export default ResultModal;
