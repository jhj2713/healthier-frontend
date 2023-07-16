import { useState } from "react";
import useModal from "src/hooks/useModal";
import PartModal from "../partModal";
import { IPart } from "../partModal/index";
import { MedicineTag, PartTags } from "../tags";
import * as Styled from "./index.style";

const Search = () => {
  const [selectedPart, setSelectedPart] = useState<IPart[]>([{ id: 1, name: "내과" }]);
  const [isSelectedMedicine, setIsSelectedMedicine] = useState<boolean>(false);

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

        <Styled.FilterContainer>
          <PartTags selectedPart={selectedPart} onClick={() => openModal()} />
          <MedicineTag
            isSelected={isSelectedMedicine}
            onClick={() => setIsSelectedMedicine(!isSelectedMedicine)}
            style={{ marginLeft: "0.8rem" }}
          />
        </Styled.FilterContainer>
      </Styled.Container>

      {isOpenModal && (
        <PartModal selectedPart={selectedPart} setSelectedPart={setSelectedPart} handleSave={handleSavePart} ref={modalRef} />
      )}
    </>
  );
};

export default Search;
