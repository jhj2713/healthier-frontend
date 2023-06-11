import severityTypes from "src/data/severity_types";
import { Container, BannerImg, Box, Title, DateItem, Tag } from "./index.style";

export interface IDiagnosisItem {
  banner_illustration: string;
  record: {
    diagnosis_id: string;
    title: string;
    is_created: string;
    severity: number;
  };
}
export interface IDiagnosisCard {
  diagnosis: IDiagnosisItem;
  handleNavigate: () => void;
}

const DiagnosisCard = ({ diagnosis, handleNavigate }: IDiagnosisCard) => {
  const diag_date = new Date(diagnosis.record.is_created);

  return (
    <Container severity={diagnosis.record.severity} onClick={handleNavigate}>
      <BannerImg>
        <img alt="banner" src={diagnosis.banner_illustration} height={160} />
      </BannerImg>
      <Box>
        <Title severity={diagnosis.record.severity}>{diagnosis.record.title}</Title>
        <DateItem severity={diagnosis.record.severity}>{`${diag_date.getMonth() + 1}월 ${diag_date.getDate()}일`}</DateItem>
        <Tag severity={diagnosis.record.severity}>{severityTypes[diagnosis.record.severity]}</Tag>
      </Box>
    </Container>
  );
};

export default DiagnosisCard;
