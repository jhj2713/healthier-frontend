import { useNavigate } from "react-router-dom";
import { HeaderContainer, Container, Title } from "./index.style";

const ResultHeader = ({ isCover }: { isCover: boolean }) => {
  const navigate = useNavigate();

  return (
    <HeaderContainer isCover={isCover}>
      <Container>
        <section className="back-button" />
        <Title isCover={isCover}>진단결과</Title>
        <section className="quit-button" onClick={() => navigate("/")}>
          <img alt="quit" src="/images/header/quit.svg" width={32} height={32} />
        </section>
      </Container>
    </HeaderContainer>
  );
};

export default ResultHeader;
