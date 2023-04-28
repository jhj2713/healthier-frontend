import { useNavigate } from "react-router-dom";
import { HeaderContainer, Container, Title } from "./index.style";

const ResultHeader = ({ isCover }: { isCover: boolean }) => {
  const navigate = useNavigate();

  return (
    <HeaderContainer isCover={isCover}>
      <Container>
        <section className="back-button" />
        <Title isCover={isCover}>감별 결과</Title>
        <section className="exit-button" onClick={() => navigate("/")}>
          <img alt="exit" src="/images/header/exit.svg" width={32} height={32} />
        </section>
      </Container>
    </HeaderContainer>
  );
};

export default ResultHeader;
