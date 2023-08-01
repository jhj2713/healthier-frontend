import { ChangeEvent, Dispatch, useRef, useState } from "react";
import { useEffect } from "react";
import ChevronLeftIcon from "src/assets/icons/ChevronLeftIcon";
import useModal from "src/hooks/useModal";
import theme from "src/lib/theme";
import { emergencyNightData } from "../data";
import PartModal from "../partModal";
import { IPart } from "../partModal/index";
import { EmergencyNightTag, MedicineTag, PartTags } from "../tags";
import * as Styled from "./index.style";

interface ISearchProps {
  selectedPart: IPart[];
  setSelectedPart: Dispatch<IPart[]>;
  handleSearch: () => void;
  searchText: string;
  setSearchText: Dispatch<string>;
  isSelectedMedicine: boolean;
  setIsSelectedMedicine: Dispatch<boolean>;
}
interface ISelectedFilter {
  emergencyNight: boolean;
  nightService: boolean;
}

const Search = ({
  selectedPart,
  setSelectedPart,
  handleSearch,
  searchText,
  setSearchText,
  isSelectedMedicine,
  setIsSelectedMedicine,
}: ISearchProps) => {
  const { isOpenModal, modalRef, closeModal, openModal } = useModal();
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [selectedFilter, setSelectedFilter] = useState<ISelectedFilter>({ emergencyNight: false, nightService: false });
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }

    inputRef.current.addEventListener("focus", () => {
      setIsFocus(true);
    });
  }, [isFocus]);
  useEffect(() => {
    document.addEventListener("keydown", submitSearch);

    return () => document.removeEventListener("keydown", submitSearch);
  }, [searchText]);

  const submitSearch = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
      setIsFocus(false);
    }
  };

  const handleSavePart = () => {
    closeModal();
  };

  return (
    <>
      <Styled.Container>
        <Styled.InputContainer isFocus={isFocus}>
          {isFocus ? (
            <div onClick={() => setIsFocus(false)}>
              <ChevronLeftIcon stroke={theme.color.grey_400} height={24} width={24} />
            </div>
          ) : (
            <img src="/images/doctorAppointment/search.svg" />
          )}
          <Styled.Input
            placeholder="병원명 및 지역명을 입력해주세요"
            value={searchText}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value)}
            ref={inputRef}
          />
        </Styled.InputContainer>

        <div style={{ marginTop: "1.4rem" }}>
          <MedicineTag isSelected={isSelectedMedicine} onClick={() => setIsSelectedMedicine(!isSelectedMedicine)} />
          <PartTags selectedPart={selectedPart} onClick={() => openModal()} style={{ marginLeft: "0.8rem" }} />
        </div>
      </Styled.Container>
      {isFocus && (
        <Styled.Wrapper>
          <div style={{ width: "100%", height: "0.1rem", backgroundColor: theme.color.grey_600 }} />

          <Styled.FilterContainer>
            <p className="sort">거리순 정렬</p>
            <div className="filter-tags">
              {emergencyNightData.map((text, idx) => (
                <EmergencyNightTag
                  key={idx}
                  isSelected={selectedFilter[text.key]}
                  onClick={() => setSelectedFilter({ ...selectedFilter, [text.key]: !selectedFilter[text.key] })}
                >
                  {text.label}
                </EmergencyNightTag>
              ))}
            </div>
          </Styled.FilterContainer>
        </Styled.Wrapper>
      )}

      {isOpenModal && (
        <PartModal selectedPart={selectedPart} setSelectedPart={setSelectedPart} handleSave={handleSavePart} ref={modalRef} />
      )}
    </>
  );
};

export default Search;
