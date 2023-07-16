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

interface IMedicineTagProps extends HTMLAttributes<HTMLDivElement> {
  isSelected: boolean;
}

export const MedicineTag = ({ isSelected, ...props }: IMedicineTagProps) => {
  return (
    <Styled.MedicineContainer isSelected={isSelected} {...props}>
      약국
    </Styled.MedicineContainer>
  );
};
