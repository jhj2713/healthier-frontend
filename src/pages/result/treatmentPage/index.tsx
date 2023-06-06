import Title from "src/components/title";
import TreatmentBox from "../treatmentBox";
import { ITreatPageProps } from "src/interfaces/resultPage";
import { Container } from "./index.style";

const TreatmentPage = ({ treatData }: { treatData: ITreatPageProps[] }) => {
  return (
    <Container>
      <section className="title-box">
        <Title text={"병원에 가면\n이런 검사 ・ 치료를 받아요"} />
      </section>
      {treatData.map((treat, idx) => (
        <TreatmentBox key={idx} title={treat.title} description={treat.detail} type={treat.type} />
      ))}
    </Container>
  );
};

export default TreatmentPage;
