import { Dispatch, forwardRef } from "react";
import RoundButton from "src/components/roundButton";
import theme from "src/lib/theme";
import { partList } from "../data";
import * as Styled from "./index.style";

interface IPartModalProps {
  selectedPart: string[];
  setSelectedPart: Dispatch<string[]>;
  handleSave: () => void;
}

const PartModal = forwardRef<HTMLDivElement, IPartModalProps>(function PartModal({ selectedPart, setSelectedPart, handleSave }, ref) {
  const handleSelectPart = (part: string) => {
    const isSelected = selectedPart.findIndex((selected) => selected === part) !== -1;

    if (!isSelected && selectedPart.length === 3) {
      return;
    }

    setSelectedPart(isSelected ? selectedPart.filter((selected) => selected !== part) : [...selectedPart, part]);
  };

  return (
    <Styled.ModalContainer>
      <Styled.BoxContainer ref={ref}>
        <Styled.Title>진료과를 선택해주세요</Styled.Title>
        <Styled.ContentContainer>
          {partList.map((part) => (
            <Styled.Card
              key={part}
              selected={selectedPart.findIndex((selected) => selected === part) !== -1}
              onClick={() => handleSelectPart(part)}
            >
              {part}
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
