import HeaderContainer from "../headerContainer";
import { IContentHeader } from "../../interfaces/component";
import { Container, BackButton, QuitButton } from "./index.style";

const ContentHeader = ({ text, back, exit, backCallback, exitCallback }: IContentHeader) => {
  return (
    <HeaderContainer>
      <Container>
        <BackButton back={back} onClick={() => back && backCallback()}>
          <img alt="back" src="/images/header/back.svg" width={32} height={32} />
        </BackButton>
        <section className="title">{text}</section>
        <QuitButton exit={exit} onClick={() => exit && exitCallback()}>
          <img alt="quit" src="/images/header/quit.svg" width={32} height={32} />
        </QuitButton>
      </Container>
    </HeaderContainer>
  );
};

export default ContentHeader;
