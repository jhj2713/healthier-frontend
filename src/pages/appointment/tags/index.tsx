import { HTMLAttributes } from "react";
import { SmallChevronDownIcon } from "src/assets/icons/ChevronDownIcon";
import * as Styled from "./index.style";

interface IPartTagsProps extends HTMLAttributes<HTMLDivElement> {
  selectedPart: { id: number; name: string }[];
}

export const PartTags = ({ selectedPart, ...props }: IPartTagsProps) => {
  return (
    <Styled.PartContainer {...props}>
      {selectedPart.map((part) => part.name).join("・")}
      <SmallChevronDownIcon />
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
