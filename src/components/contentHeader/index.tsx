import HeaderContainer from "../headerContainer";
import { Container, BackButton, ExitButton } from "./index.style";

export interface IContentHeader {
  label?: string;
  back: boolean;
  exit: boolean;
  backCallback?: () => void;
  exitCallback?: () => void;
}

const ContentHeader = ({ label = "", back, exit, backCallback, exitCallback }: IContentHeader) => {
  return (
    <HeaderContainer>
      <Container>
        <BackButton visible={back} onClick={() => backCallback && backCallback()}>
          {back && <img alt="back" src="/images/header/back.svg" width={32} height={32} />}
        </BackButton>
        <section className="title">{label}</section>
        <ExitButton visible={exit} onClick={() => exitCallback && exitCallback()}>
          {exit && <img alt="exit" src="/images/header/exit.svg" width={32} height={32} />}
        </ExitButton>
      </Container>
    </HeaderContainer>
  );
};

export default ContentHeader;
