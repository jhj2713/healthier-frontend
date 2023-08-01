import { useState } from "react";
import ChevronDownIcon from "src/assets/icons/ChevronDownIcon";
import ChevronUpIcon from "src/assets/icons/ChevronUpIcon";
import theme from "src/lib/theme";
import Description from "../../lib/description";
import * as Styled from "./index.style";
import type { IExaminationTreatment } from "src/interfaces/diagnoseApi/result";

interface ITreatmentBoxProps {
  examinationTreatment: IExaminationTreatment;
}

const ExaminationTreatmentBox = ({ examinationTreatment }: ITreatmentBoxProps) => {
  const { name, type, content } = examinationTreatment;

  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <Styled.Container onClick={() => setIsOpen(!isOpen)}>
      <Styled.TitleContainer>
        <Styled.TitleWrapper>
          <Styled.Title>{name}</Styled.Title>
          <Styled.Chip variant={type}>{type}</Styled.Chip>
        </Styled.TitleWrapper>
        {isOpen ? <ChevronUpIcon stroke={theme.color.grey_500} /> : <ChevronDownIcon stroke={theme.color.grey_500} />}
      </Styled.TitleContainer>
      {isOpen && (
        <Styled.Contents>
          <Description text={content} />
        </Styled.Contents>
      )}
    </Styled.Container>
  );
};

export default ExaminationTreatmentBox;
