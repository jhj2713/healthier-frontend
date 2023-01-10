import imageUrl from "src/data/image_url";
import HeaderContainer from "../headerContainer";
import { Container } from "./index.style";

const MainHeader = () => {
  return (
    <HeaderContainer>
      <Container>
        <img className="logo" alt="logo" src={imageUrl.logo} height={24} />
      </Container>
    </HeaderContainer>
  );
};

export default MainHeader;
