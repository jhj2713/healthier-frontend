import styled from "styled-components";
import { Body_4, Heading_5 } from "src/lib/fontStyle";

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

  .contents {
    display: flex;
    flex-direction: column;
    align-items: center;

    height: calc(100% - 5rem);
    width: 100%;
  }
`;

export const Description = styled(Body_4)`
  color: ${({ theme }) => theme.color.grey_200};

  margin-top: 1.2rem;
`;

export const Title = styled(Heading_5)`
  color: ${({ theme }) => theme.color.grey_200};
  text-align: center;

  margin-top: 0.4rem;

  font-size: 2.2rem;
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
  bottom: 2.2rem;

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .login-button {
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
  }

  .login-image {
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;
    left: 30px;
  }
`;

export const Continue = styled(Body_4)`
  color: ${({ theme }) => theme.color.grey_200};

  margin-top: 1.4rem;

  cursor: pointer;
`;
