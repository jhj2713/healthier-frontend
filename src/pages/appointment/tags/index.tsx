import { HTMLAttributes } from "react";
import { ChevronRightIcon } from "src/assets/icons/ChevronRightIcon";
import * as Styled from "./index.style";

interface IPartTagsProps extends HTMLAttributes<HTMLDivElement> {
  selectedPart: { id: number; name: string }[];
}

export const PartTags = ({ selectedPart, ...props }: IPartTagsProps) => {
  return (
    <Styled.PartContainer isSelected={selectedPart.length !== 0} {...props}>
      {selectedPart.length === 0 && "진료과목"}
      {selectedPart.map((part) => part.name).join(" ・ ")}
      <ChevronRightIcon />
    </Styled.PartContainer>
  );
};

interface ISelectableTagProps extends HTMLAttributes<HTMLDivElement> {
  isSelected: boolean;
}

export const MedicineTag = ({ isSelected, ...props }: ISelectableTagProps) => {
  return (
    <Styled.MedicineContainer isSelected={isSelected} {...props}>
      약국
    </Styled.MedicineContainer>
  );
};

export const EmergencyNightTag = ({ isSelected, children, ...props }: ISelectableTagProps) => {
  return (
    <Styled.EmergencyNightContainer isSelected={isSelected} {...props}>
      {children}
    </Styled.EmergencyNightContainer>
  );
};
