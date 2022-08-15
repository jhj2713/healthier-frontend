import { Dispatch } from "react";
import styled from "styled-components";
import { Body_4, Heading_5 } from "../../lib/fontStyle";
import axios from "axios";
import { SET_TOKEN, DELETE_TOKEN } from "../../state/authSlice";
import { useAppDispatch } from "../../state";

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

  cursor: pointer;
`;
const Highlight = styled.span`
  font-weight: 500;

  color: ${({ theme }) => theme.color.green};
`;
const Title = styled(Heading_5)`
  color: ${({ theme }) => theme.color.grey_200};
  text-align: center;

  margin-top: 1.2rem;

  font-size: 2rem;

  margin: 1.2rem 3rem 0 3rem;
`;
const Contents = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
  width: 100%;
  margin-top: 1.6rem;
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
  bottom: 2.4rem;

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Continue = styled(Body_4)`
  color: ${({ theme }) => theme.color.grey_200};

  margin-top: 1.4rem;

  cursor: pointer;
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

  cursor: pointer;
`;
const LoginImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  left: 3rem;
`;

const Kakao = (window as any).Kakao;

const LoginModal = ({ setModal }: { setModal: Dispatch<boolean> }) => {
  const dispatch = useAppDispatch();

  const kakaoLogin = () => {
    Kakao.Auth.login({
      scope: "account_email",
      success: async function (authObj: any) {
        try {
          const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/oauth/kakao?access_token=${authObj.access_token}`);
          const token = res.headers.authorization.slice(7);
          dispatch(DELETE_TOKEN);
          dispatch(SET_TOKEN(token));
        } catch (err: any) {
          if (err.code === "ERR_BAD_REQUEST") {
            alert("이메일 사용 동의가 필요합니다");
          } else {
          }
          console.log(err);
          alert("내부 서버 오류, 다시 시도해주세요");
        } finally {
          setModal(false);
        }
      },
      fail: function (err: any) {
        console.log(err);
        alert("로그인 에러, 다시 시도해주세요");
      },
    });
  };

  const handleLoginClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    kakaoLogin();
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
          <Image
            alt="login"
            src="https://healthier.s3.ap-northeast-2.amazonaws.com/client/%EC%A7%84%EB%8B%A8%EA%B8%B0%EB%A1%9D_%EB%A1%9C%EA%B7%B8%EC%9D%B8+%EB%AA%A8%EB%8B%AC.png"
          />
        </NoteImage>
      </Contents>
      <BottomButtons>
        <LoginButton onClick={handleLoginClick}>
          <LoginImg alt="kakao_login" src="images/login/kakao.webp" />
          카카오 로그인
        </LoginButton>
        <Continue onClick={() => setModal(false)}>괜찮아요, 비회원으로 이용할게요</Continue>
      </BottomButtons>
    </Container>
  );
};

export default LoginModal;
