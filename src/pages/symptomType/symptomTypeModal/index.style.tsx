import { Body_4, Heading_5 } from "src/lib/fontStyle";
import styled from "styled-components";

export const Wrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.6);

  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.section`
  position: absolute;

  width: calc(var(--vw, 1vw) * 100 - 4rem);
  height: 44rem;

  border-radius: 0.8rem;

  background: radial-gradient(181.28% 184.02% at -58.92% 120.58%, rgba(210, 250, 100, 0.9) 0%, rgba(84, 100, 243, 0) 100%), #5464f2;

  .exit-image {
    display: flex;
    justify-content: flex-end;

    margin-top: 1.4rem;
    margin-right: 1.4rem;

    cursor: pointer;
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

  .highlight {
    color: ${({ theme }) => theme.color.green};
  }
`;

export const Contents = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: calc(100% - 5rem);
  width: 100%;
`;

export const NoteImage = styled.section`
  height: 19.6rem;
  margin-top: 1rem;

  .image {
    height: 100%;
  }
`;

export const ButtonContainer = styled.section`
  position: absolute;
  bottom: 2rem;

  width: 100%;

  display: flex;
  justify-content: center;

  .bottom-button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: calc(var(--vw, 1vw) * 100 - 6.8rem);
    height: 4.9rem;

    background-color: ${({ theme }) => theme.color.sub_blue};

    border-radius: 3rem;
    cursor: pointer;
  }

  .button-text {
    color: ${({ theme }) => theme.color.blue};

    font-size: 1.5rem;
    font-weight: 300;
    line-height: 150%;

    text-align: center;
  }
`;
