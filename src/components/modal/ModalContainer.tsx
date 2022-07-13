import React, { useRef } from "react";
import styled from "styled-components";
import { IModal } from "../../interfaces/modal";

const Wrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);

  background-color: rgba(0, 0, 0, 0.6);

  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.section`
  position: relative;

  width: calc(100vw - 4rem);
  height: 48.2rem;

  border-radius: 0.8rem;

  background: radial-gradient(
      181.28% 184.02% at -58.92% 120.58%,
      rgba(210, 250, 100, 0.9) 0%,
      rgba(84, 100, 243, 0) 100%
    ),
    #5464f2;
`;

const ModalContainer = ({ children, setModal }: IModal) => {
  const wrapperRef = useRef(null);

  const handleModalClose = (e: React.MouseEvent) => {
    if (wrapperRef.current === e.target) {
      setModal(false);
    }
  };

  return (
    <Wrapper ref={wrapperRef} onClick={handleModalClose}>
      <Container>{children}</Container>
    </Wrapper>
  );
};

export default ModalContainer;
