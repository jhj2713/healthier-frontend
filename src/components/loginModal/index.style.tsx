import { Body_4 } from "src/lib/fontStyle";
import styled from "styled-components";

export const Container = styled.section`
  position: absolute;

  width: calc(var(--vw, 1vw) * 100 - 4rem);
  height: 48.2rem;

  .exit-image {
    display: flex;
    justify-content: flex-end;

    margin-top: 1.4rem;
    margin-right: 1.4rem;

    cursor: pointer;
  }
`;

export const Contents = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: calc(100% - 5rem);
  width: 100%;
  margin-top: 1.2rem;
`;

export const NoteImage = styled.section`
  height: 19.6rem;

  margin-top: 1.6rem;

  display: flex;
  justify-content: center;

  .image {
    height: 100%;
  }
`;

export const BottomButtons = styled.section`
  position: absolute;
  bottom: 2.4rem;

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Continue = styled(Body_4)`
  color: ${({ theme }) => theme.color.grey_200};

  margin-top: 1.4rem;

  cursor: pointer;
`;

export const LoginButton = styled.button`
  width: calc(var(--vw, 1vw) * 100 - 6.8rem);
  height: 4.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0.6rem;
  border: none;
  background-color: ${({ theme }) => theme.color.kakao_logo};

  font-size: 1.5rem;

  color: #000000;

  cursor: pointer;

  .login-image {
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;
    left: 3rem;
  }
`;
