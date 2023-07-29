import { TCoverPageData } from "src/interfaces/resultPage";
import Chips from "../lib/chips";
import * as Styled from "./index.style";
import SeverityBar from "./severityBar";

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
        <Chips labels={medicalDepartments} />
      </Styled.ContentsContainer>

      <Styled.SeverityBarWrapper>
        <SeverityBar severity={severity} />
      </Styled.SeverityBarWrapper>
    </Styled.Container>
  );
};

export default CoverPage;
