import { IModalContainer } from "src/interfaces/modal";
import { Wrapper, Container } from "./index.style";

const ModalContainer = ({ children }: IModalContainer) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};

export default ModalContainer;
