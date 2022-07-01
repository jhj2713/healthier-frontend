import styled from "styled-components";

const Wrapper = styled.section`
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.6);

  z-index: 10;
`;

const ModalContainer = ({ children }: { children: JSX.Element }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default ModalContainer;
