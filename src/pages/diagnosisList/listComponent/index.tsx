import { useNavigate } from "react-router-dom";
import { IListComponent } from "src/interfaces/component";
import severityTypes from "src/data/severity_types";
import axios from "axios";
import { Container, BannerImg, Box, Title, Date, Tag } from "./index.style";

const ListComponent = ({ diagnosis }: IListComponent) => {
  const navigate = useNavigate();

  const diag_date = `${diagnosis.record.is_created.split("-")[1]}월 ${diagnosis.record.is_created.split("-")[2].split("T")[0]}일`;

  const handleNavigate = () => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/api/diagnosis/results/${diagnosis.record.diagnosis_id}`).then((res) => {
      navigate("/result", {
        state: {
          type: "result",
          diagnostic_result: res.data.diagnostic_result,
        },
      });
    });
  };

  return (
    <Container severity={diagnosis.record.severity} onClick={handleNavigate}>
      <BannerImg>
        <img alt="banner" src={diagnosis.banner_illustration} height={160} />
      </BannerImg>
      <Box>
        <Title severity={diagnosis.record.severity}>{diagnosis.record.title}</Title>
        <Date severity={diagnosis.record.severity}>{diag_date}</Date>
        <Tag severity={diagnosis.record.severity}>{severityTypes[diagnosis.record.severity]}</Tag>
      </Box>
    </Container>
  );
};

export default ListComponent;
