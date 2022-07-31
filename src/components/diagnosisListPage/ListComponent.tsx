import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IListComponent } from "../../interfaces/component";
import { Heading_5 } from "../../lib/fontStyle";
import axios from "axios";

const Container = styled.section<{ severity: number }>`
  position: relative;
  height: 16rem;
  background: ${({ theme, severity }) =>
    severity === 3
      ? theme.color.sub_blue
      : severity === 2
      ? theme.color.blue_500
      : severity === 1
      ? theme.color.blue_700
      : theme.color.blue_800};
  background-size: cover;

  border-radius: 0.8rem;

  & + & {
    margin-top: 1rem;
  }
`;
const Box = styled.section`
  padding: 1.4rem 1.2rem 0 1.4rem;
`;
const Title = styled(Heading_5)<{ severity: number }>`
  color: ${({ theme, severity }) =>
    severity === 3 ? theme.color.blue_800 : theme.color.grey_200};

  width: 12rem;

  font-size: 2rem;
`;
const Date = styled.section<{ severity: number }>`
  font-size: 1.3rem;
  font-weight: 200;
  line-height: 130%;
  letter-spacing: -0.05rem;

  color: ${({ theme, severity }) =>
    severity === 3 ? theme.color.blue_700 : theme.color.sub_blue};

  margin-top: 0.4rem;
`;
const Tag = styled.section<{ severity: number }>`
  position: absolute;
  bottom: 0;
  display: inline;

  background-color: ${({ theme, severity }) =>
    severity === 3
      ? theme.color.blue
      : severity === 2
      ? theme.color.blue_700
      : theme.color.sub_blue};
  color: ${({ theme, severity }) =>
    severity === 3 || severity === 2 ? theme.color.grey_200 : theme.color.blue};

  font-weight: 300;
  font-size: 1.3rem;
  line-height: 130%;
  letter-spacing: -0.05rem;

  padding: 0.6rem 1rem;
  margin-bottom: 1.2rem;
  border-radius: 3rem;
`;
const BannerImg = styled.section`
  position: absolute;
  right: 0;
`;

const severity_map = [
  "상태가 양호해요",
  "관리가 필요해요",
  "관리가 필요해요",
  "병원에 가야해요",
];

const ListComponent = ({ diagnosis }: IListComponent) => {
  const navigate = useNavigate();

  const diag_date = `${diagnosis.record.is_created.split("-")[1]}월 ${
    diagnosis.record.is_created.split("-")[2].split("T")[0]
  }일`;

  const handleNavigate = () => {
    axios
      .get(
        `${process.env.REACT_APP_SERVER_URL}/api/diagnosis/results/${diagnosis.record.diagnosis_id}`
      )
      .then((res) => {
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
        <Title severity={diagnosis.record.severity}>
          {diagnosis.record.title}
        </Title>
        <Date severity={diagnosis.record.severity}>{diag_date}</Date>
        <Tag severity={diagnosis.record.severity}>
          {severity_map[diagnosis.record.severity]}
        </Tag>
      </Box>
    </Container>
  );
};

export default ListComponent;
