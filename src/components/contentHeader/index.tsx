import HeaderContainer from "../headerContainer";
import { IContentHeader } from "src/interfaces/component";
import { Container, BackButton, ExitButton } from "./index.style";

const ContentHeader = ({ text, back, exit, backCallback, exitCallback }: IContentHeader) => {
  return (
    <HeaderContainer>
      <Container>
        <BackButton visible={back} onClick={() => back && backCallback()}>
          <img alt="back" src="/images/header/back.svg" width={32} height={32} />
        </BackButton>
        <section className="title">{text}</section>
        <ExitButton visible={exit} onClick={() => exit && exitCallback()}>
          <img alt="exit" src="/images/header/exit.svg" width={32} height={32} />
        </ExitButton>
      </Container>
    </HeaderContainer>
  );
};

export default ContentHeader;
