import HeaderContainer from "../headerContainer";
import { Container } from "./index.style";

const MainHeader = () => {
  return (
    <HeaderContainer>
      <Container>
        <img className="logo" alt="logo" src="https://healthier.s3.ap-northeast-2.amazonaws.com/client/logo.png" height={24} />
      </Container>
    </HeaderContainer>
  );
};

export default MainHeader;
