import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IListComponent } from "../../interfaces/component";
import { Heading_5 } from "../../lib/fontStyle";
import axios from "axios";

const Container = styled.section<{ photo: string }>`
  height: 16rem;
  background: ${({ photo }) => `url(${photo})`},
    ${({ theme }) => theme.color.blue};
  background-size: cover;

  border-radius: 0.8rem;

  & + & {
    margin-top: 1rem;
  }
`;
const Box = styled.section`
  position: relative;
  height: calc(100% - 2.6rem);

  padding: 1.4rem 1.2rem 1.2rem 1.4rem;
`;
const Title = styled(Heading_5)<{ severity: number }>`
  color: ${({ theme, severity }) =>
    severity === 0 ? theme.color.grey_600 : theme.color.grey_200};

  width: 5rem;
`;
const Date = styled.section<{ severity: number }>`
  font-size: 1rem;
  font-weight: 200;
  line-height: 130%;
  letter-spacing: -0.05rem;

  color: ${({ theme, severity }) =>
    severity === 0 ? theme.color.grey_650 : theme.color.sub_blue};

  margin-top: 0.4rem;
`;
const Tag = styled.section<{ severity: number }>`
  position: absolute;
  bottom: 0;
  display: inline;

  background-color: ${({ theme, severity }) =>
    severity === 0 ? theme.color.blue : theme.color.sub_blue};
  color: ${({ theme, severity }) =>
    severity === 0 ? theme.color.grey_200 : theme.color.blue};

  font-weight: 300;
  font-size: 1rem;
  line-height: 130%;
  letter-spacing: -0.05rem;

  padding: 0.4rem 0.6rem;
  margin-bottom: 1.2rem;
  border-radius: 3rem;
`;

const severity_map = [
  "상태가 양호해요",
  "관리가 필요해요",
  "병원에 가야해요",
  "병원에 가야해요",
];

const ListComponent = ({ diagnosis }: IListComponent) => {
  const navigate = useNavigate();

  const diag_date =
    diagnosis.date.split("/")[0].padStart(2, "0") +
    "월 " +
    diagnosis.date.split("/")[1].padStart(2, "0") +
    "일";

  const handleNavigate = () => {
    axios
      .get(
        `${process.env.REACT_APP_SERVER_URL}/api/diagnosis/sleepdisorder/results/${diagnosis.result_log_id}`
      )
      .then((res) => {
        console.log(res.data.diagnostic_result);
        navigate("/result", {
          state: {
            type: "result",
            diagnostic_result: res.data.diagnostic_result,
          },
        });
      });
  };

  return (
    <Container photo={diagnosis.photo} onClick={handleNavigate}>
      <Box>
        <Title severity={diagnosis.severity}>{diagnosis.name}</Title>
        <Date severity={diagnosis.severity}>{diag_date}</Date>
        <Tag severity={diagnosis.severity}>
          {severity_map[diagnosis.severity]}
        </Tag>
      </Box>
    </Container>
  );
};

export default ListComponent;
