import { IModal } from "../../interfaces/modal";
import { Wrapper, Container } from "./index.style";

const ModalContainer = ({ children }: IModal) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};

export default ModalContainer;
