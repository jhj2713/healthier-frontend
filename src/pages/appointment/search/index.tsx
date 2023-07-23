import { ChangeEvent, Dispatch, useState } from "react";
import { useEffect } from "react";
import useModal from "src/hooks/useModal";
import PartModal from "../partModal";
import { IPart } from "../partModal/index";
import { MedicineTag, PartTags } from "../tags";
import * as Styled from "./index.style";

interface ISearchProps {
  selectedPart: IPart[];
  setSelectedPart: Dispatch<IPart[]>;
  handleSearch: () => void;
  searchText: string;
  setSearchText: Dispatch<string>;
}

const Search = ({ selectedPart, setSelectedPart, handleSearch, searchText, setSearchText }: ISearchProps) => {
  const [isSelectedMedicine, setIsSelectedMedicine] = useState<boolean>(false);

  const { isOpenModal, modalRef, closeModal, openModal } = useModal();

  useEffect(() => {
    document.addEventListener("keydown", submitSearch);

    return () => document.removeEventListener("keydown", submitSearch);
  }, []);

  const submitSearch = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSavePart = () => {
    closeModal();
  };

  return (
    <>
      <Styled.Container>
        <Styled.InputContainer>
          <img src="/images/doctorAppointment/search.svg" />
          <Styled.Input
            placeholder="병원명 및 지역명을 입력해주세요"
            value={searchText}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value)}
          />
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
