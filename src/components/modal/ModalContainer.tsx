import React, { useRef } from "react";
import styled from "styled-components";
import { IModal } from "../../interfaces/component";

const Wrapper = styled.section`
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.6);

  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;
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
      {children}
    </Wrapper>
  );
};

export default ModalContainer;
