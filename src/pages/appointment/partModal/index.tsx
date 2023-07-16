import ModalContainer from "src/components/modalContainer";
import RoundButton from "src/components/roundButton";
import theme from "src/lib/theme";
import { partList } from "./data";
import * as Styled from "./index.style";

interface IPartModalProps {
  selectedPart: { id: number; name: string }[];
  handleSave: () => void;
}

const PartModal = ({ selectedPart, handleSave }: IPartModalProps) => {
  return (
    <ModalContainer>
      <Styled.BoxContainer>
        <Styled.Title>진료과를 선택해주세요</Styled.Title>
        <Styled.ContentContainer>
          {partList.map((part) => (
            <Styled.Card key={part.id} selected={selectedPart.findIndex((selected) => selected.id === part.id) !== -1}>
              {part.name}
            </Styled.Card>
          ))}
        </Styled.ContentContainer>

        <RoundButton outline={theme.color.blue} backgroundColor={theme.color.blue} color={theme.color.grey_100} onClick={handleSave}>
          선택 완료했어요
        </RoundButton>
      </Styled.BoxContainer>
    </ModalContainer>
  );
};

export default PartModal;
