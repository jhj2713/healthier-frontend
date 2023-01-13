import { useNavigate } from "react-router-dom";
import { IListComponent } from "src/interfaces/component";
import severityTypes from "src/data/severity_types";
import { Container, BannerImg, Box, Title, DateItem, Tag } from "./index.style";
import { Diagnosis } from "src/api/diagnosis";

const ListComponent = ({ diagnosis }: IListComponent) => {
  const navigate = useNavigate();

  const diag_date = new Date(diagnosis.record.is_created);

  const handleNavigate = async () => {
    const diagnosisResult = await Diagnosis.getDiagnosisDetail(diagnosis.record.diagnosis_id);

    navigate("/result", {
      state: {
        type: "result",
        diagnostic_result: diagnosisResult.diagnostic_result,
      },
    });
  };

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

export default ListComponent;
