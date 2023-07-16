import { HTMLAttributes } from "react";
import { SmallChevronDownIcon } from "src/assets/icons/ChevronDownIcon";
import * as Styled from "./index.style";

interface IPartTagsProps extends HTMLAttributes<HTMLDivElement> {
  selectedPart: { id: number; name: string }[];
}

const PartTags = ({ selectedPart }: IPartTagsProps) => {
  return (
    <Styled.Container>
      {selectedPart.map((part) => part.name).join("・")}
      <SmallChevronDownIcon />
    </Styled.Container>
  );
};

export default PartTags;
