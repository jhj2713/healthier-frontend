import { Dispatch, forwardRef } from "react";
import RoundButton from "src/components/roundButton";
import theme from "src/lib/theme";
import { partList } from "../data";
import * as Styled from "./index.style";

export interface IPart {
  id: number;
  name: string;
}
interface IPartModalProps {
  selectedPart: IPart[];
  setSelectedPart: Dispatch<IPart[]>;
  handleSave: () => void;
}

const PartModal = forwardRef<HTMLDivElement, IPartModalProps>(function PartModal({ selectedPart, setSelectedPart, handleSave }, ref) {
  const handleSelectPart = (part: IPart) => {
    const isSelected = selectedPart.findIndex((selected) => selected.id === part.id) !== -1;

    if (!isSelected && selectedPart.length === 3) {
      return;
    }

    setSelectedPart(isSelected ? selectedPart.filter((selected) => selected.id !== part.id) : [...selectedPart, part]);
  };

  return (
    <Styled.ModalContainer>
      <Styled.BoxContainer ref={ref}>
        <Styled.Title>진료과를 선택해주세요</Styled.Title>
        <Styled.ContentContainer>
          {partList.map((part) => (
            <Styled.Card
              key={part.id}
              selected={selectedPart.findIndex((selected) => selected.id === part.id) !== -1}
              onClick={() => handleSelectPart(part)}
            >
              {part.name}
            </Styled.Card>
          ))}
        </Styled.ContentContainer>

        <RoundButton
          outline={theme.color.blue}
          backgroundColor={theme.color.blue}
          color={theme.color.grey_100}
          onClick={handleSave}
          style={{ width: "292px" }}
        >
          선택 완료했어요
        </RoundButton>
      </Styled.BoxContainer>
    </Styled.ModalContainer>
  );
});

export default PartModal;
