import styled from "styled-components";
import HeaderContainer from "./HeaderContainer";
import { IContentHeader } from "../../interfaces/component";

const Container = styled.section`
  color: ${({ theme }) => theme.color.grey_200};
  height: inherit;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  position: relative;
`;
const Title = styled.section`
  font-size: 1.6rem;
  font-weight: 200;

  margin-bottom: 1.6rem;
`;
const BackButton = styled.section<{ back: boolean }>`
  opacity: ${({ back }) => (back ? 1 : 0)};

  width: 3.2rem;
  height: 3.2rem;

  margin-left: 1.5rem;
  margin-bottom: 0.9rem;

  cursor: pointer;
`;
const QuitButton = styled.section<{ exit: boolean }>`
  opacity: ${({ exit }) => (exit ? 1 : 0)};

  margin-bottom: 0.9rem;
  margin-right: 1.5rem;

  cursor: pointer;
`;

const ContentHeader = ({ text, back, exit, backCallback, exitCallback }: IContentHeader) => {
  return (
    <HeaderContainer>
      <Container>
        <BackButton back={back} onClick={() => back && backCallback()}>
          <img alt="back" src="/images/header/back.svg" width={32} height={32} />
        </BackButton>
        <Title>{text}</Title>
        <QuitButton exit={exit} onClick={() => exit && exitCallback()}>
          <img alt="quit" src="/images/header/quit.svg" width={32} height={32} />
        </QuitButton>
      </Container>
    </HeaderContainer>
  );
};

export default ContentHeader;
