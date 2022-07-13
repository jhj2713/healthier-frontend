import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IListComponent } from "../../interfaces/component";
import { Heading_5 } from "../../lib/fontStyle";
import axios from "axios";

const Container = styled.section<{ photo: string }>`
  height: 16rem;
  background-image: ${({ photo }) => `url(${photo})`};
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
const Title = styled(Heading_5)`
  color: ${({ theme }) => theme.color.grey_200};
`;
const Date = styled.section`
  font-size: 1rem;
  font-weight: 200;
  line-height: 130%;
  letter-spacing: -0.05rem;

  color: ${({ theme }) => theme.color.sub_blue};

  margin-top: 0.4rem;
`;
const Tag = styled.section`
  position: absolute;
  bottom: 0;
  display: inline;

  background-color: ${({ theme }) => theme.color.sub_blue};
  color: ${({ theme }) => theme.color.blue};

  font-weight: 300;
  font-size: 1rem;
  line-height: 130%;
  letter-spacing: -0.05rem;

  padding: 0.4rem 0.6rem;
  margin-bottom: 1.2rem;
  border-radius: 3rem;
`;

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
        navigate("/result", { state: res.data.diagnostic_result });
      });
  };

  return (
    <Container photo={diagnosis.photo} onClick={handleNavigate}>
      <Box>
        <Title>
          일주기 리듬 <br />
          수면 장애
        </Title>
        <Date>{diag_date}</Date>
        <Tag>#수면장애</Tag>
      </Box>
    </Container>
  );
};

export default ListComponent;
