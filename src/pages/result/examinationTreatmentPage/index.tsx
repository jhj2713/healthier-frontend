import Title from "../lib/Title";
import ExaminationTreatmentBox from "./examinationTreatmentBox";
import { Container } from "./index.style";
import type { TExaminationTreatmentsData } from "src/interfaces/resultPage";

interface IExaminationTreatmentsPageProps {
  data: TExaminationTreatmentsData;
}

const ExaminationTreatmentPage = ({ data }: IExaminationTreatmentsPageProps) => {
  const { examinationTreatments } = data;

  return (
    <Container>
      <Title text={"병원에 가면\n이런 검사 ・ 치료를 받아요"} style={{ marginTop: "2rem" }} />
      {examinationTreatments.map((examinationTreatment, idx) => (
        <ExaminationTreatmentBox key={idx} examinationTreatment={examinationTreatment} />
      ))}
    </Container>
  );
};

export default ExaminationTreatmentPage;
