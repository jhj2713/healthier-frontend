import { useNavigate } from "react-router-dom";
import ChevronLeftIcon from "src/assets/icons/ChevronLeftIcon";
import XIcon from "src/assets/icons/XIcon";
import { HeaderContainer, Container, Title } from "./index.style";

const ResultHeader = ({ isCover }: { isCover: boolean }) => {
  const navigate = useNavigate();

  return (
    <HeaderContainer isCover={isCover}>
      <Container>
        {isCover ? (
          <div className="back-button" onClick={() => navigate(-1)}>
            <ChevronLeftIcon />
          </div>
        ) : (
          <div className="back-button" />
        )}

        <Title isCover={isCover}>감별 결과</Title>
        <div className="exit-button" onClick={() => navigate("/")}>
          <XIcon />
        </div>
      </Container>
    </HeaderContainer>
  );
};

export default ResultHeader;
