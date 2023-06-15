import severityTypes from "src/data/severity_types";
import { Container, BannerImgContainer, BannerImg, Box, Title, DateItem, Tag, TitleContainer, BannerShadow } from "./index.style";

export interface IDiagnosisItem {
  banner_illustration: string;
  record: {
    diagnosis_id: number;
    title: string;
    is_created?: string;
    severity: number;
  };
}
export interface IDiagnosisCard {
  isSquare?: boolean;
  diagnosis: IDiagnosisItem;
  handleNavigate: () => void;
}

const DiagnosisCard = ({ isSquare = false, diagnosis, handleNavigate }: IDiagnosisCard) => {
  const diagDate = diagnosis.record.is_created ? new Date(diagnosis.record.is_created) : null;

  return (
    <Container severity={diagnosis.record.severity} onClick={handleNavigate} isSquare={isSquare}>
      <BannerImgContainer>
        <BannerImg alt="banner" src={diagnosis.banner_illustration} isSquare={isSquare} />
        {isSquare && <BannerShadow />}
      </BannerImgContainer>
      <Box isDate={diagDate}>
        <TitleContainer>
          <Title severity={diagnosis.record.severity}>{diagnosis.record.title}</Title>
          {diagDate && <DateItem severity={diagnosis.record.severity}>{`${diagDate.getMonth() + 1}월 ${diagDate.getDate()}일`}</DateItem>}
        </TitleContainer>
        <Tag severity={diagnosis.record.severity}>{severityTypes[diagnosis.record.severity]}</Tag>
      </Box>
    </Container>
  );
};

export default DiagnosisCard;
