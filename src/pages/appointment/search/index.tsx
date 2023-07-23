import { Dispatch, useState } from "react";
import useModal from "src/hooks/useModal";
import PartModal from "../partModal";
import { IPart } from "../partModal/index";
import { MedicineTag, PartTags } from "../tags";
import * as Styled from "./index.style";

interface ISearchProps {
  selectedPart: IPart[];
  setSelectedPart: Dispatch<IPart[]>;
}

const Search = ({ selectedPart, setSelectedPart }: ISearchProps) => {
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
          <Styled.Input placeholder="병원명 및 지역명을 입력해주세요" />
        </Styled.InputContainer>

        <Styled.FilterContainer>
          <MedicineTag
            isSelected={isSelectedMedicine}
            onClick={() => setIsSelectedMedicine(!isSelectedMedicine)}
            style={{ marginLeft: "0.8rem" }}
          />
          <PartTags selectedPart={selectedPart} onClick={() => openModal()} />
        </Styled.FilterContainer>
      </Styled.Container>

      {isOpenModal && (
        <PartModal selectedPart={selectedPart} setSelectedPart={setSelectedPart} handleSave={handleSavePart} ref={modalRef} />
      )}
    </>
  );
};

export default Search;
