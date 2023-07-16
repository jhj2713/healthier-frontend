import { useState } from "react";
import useModal from "src/hooks/useModal";
import PartModal from "../partModal";
import { IPart } from "../partModal/index";
import PartTags from "../partTags";
import * as Styled from "./index.style";

const Search = () => {
  const [selectedPart, setSelectedPart] = useState<IPart[]>([{ id: 1, name: "내과" }]);
  const { isOpenModal, modalRef, closeModal, openModal } = useModal();

  const handleSavePart = () => {
    closeModal();
  };

  return (
    <>
      <Styled.Container>
        <Styled.InputContainer>
          <img src="/images/doctorAppointment/search.svg" />
          <Styled.Input />
        </Styled.InputContainer>

        <Styled.FilterContainer onClick={() => openModal()}>
          <PartTags selectedPart={selectedPart} />
        </Styled.FilterContainer>
      </Styled.Container>

      {isOpenModal && (
        <PartModal selectedPart={selectedPart} setSelectedPart={setSelectedPart} handleSave={handleSavePart} ref={modalRef} />
      )}
    </>
  );
};

export default Search;
