import styled from "styled-components";
import Title from "../common/Title";
import TreatmentBox from "./TreatmentBox";
import { ITreatPageProps } from "../../../interfaces/resultPage";

const Container = styled.section`
  padding-top: 9.6rem;
  padding-bottom: 12rem;
  margin: 0 2.4rem;
`;
const TitleBox = styled.section`
  margin: 2rem 0rem;
`;

const TreatmentPage = ({ treatData }: { treatData: ITreatPageProps[] }) => {
  return (
    <Container>
      <TitleBox>
        <Title highlight="" text={"병원에 가면\n이런 치료를 받아요"} />
      </TitleBox>
      {treatData.map((treat, idx) => (
        <TreatmentBox
          key={idx}
          title={treat.title}
          description={treat.detail}
        />
      ))}
    </Container>
  );
};

export default TreatmentPage;
