import { TCoverPageData } from "src/interfaces/resultPage";
import { ChipsContainer, Chip } from "../lib/index.style";
import SeverityBar from "../severityBar";
import * as Styled from "./index.style";

interface ICoverPageProps {
  data: TCoverPageData;
}

const CoverPage = ({ data }: ICoverPageProps) => {
  const { mainImg, typicalSymptom, name, necessaryMeasures, medicalDepartments, severity } = data;

  return (
    <Styled.Container>
      <Styled.MainImgWrapper>
        <Styled.MainImg src={mainImg ?? ""} alt="main-img" />
      </Styled.MainImgWrapper>

      <Styled.ContentsContainer>
        <Styled.TypicalSymptom>{typicalSymptom}</Styled.TypicalSymptom>
        <Styled.Name>{name}</Styled.Name>
        <Styled.NecessaryMeasures>{necessaryMeasures}</Styled.NecessaryMeasures>
        <ChipsContainer>
          {medicalDepartments.map((medicalDepartment) => (
            <Chip key={medicalDepartment}>{medicalDepartment}</Chip>
          ))}
        </ChipsContainer>
      </Styled.ContentsContainer>

      <Styled.SeverityBarWrapper>
        <SeverityBar severity={severity} />
      </Styled.SeverityBarWrapper>
    </Styled.Container>
  );
};

export default CoverPage;
