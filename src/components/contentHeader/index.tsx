import HeaderContainer from "../headerContainer";
import { IContentHeader } from "src/interfaces/component";
import { Container, BackButton, ExitButton } from "./index.style";

const ContentHeader = ({ children, back, exit, backCallback, exitCallback }: IContentHeader) => {
  return (
    <HeaderContainer>
      <Container>
        <BackButton visible={back} onClick={() => backCallback && backCallback()}>
          <img alt="back" src="/images/header/back.svg" width={32} height={32} />
        </BackButton>
        <section className="title">{children}</section>
        <ExitButton visible={exit} onClick={() => exitCallback && exitCallback()}>
          <img alt="exit" src="/images/header/exit.svg" width={32} height={32} />
        </ExitButton>
      </Container>
    </HeaderContainer>
  );
};

export default ContentHeader;
