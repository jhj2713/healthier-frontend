import { ITreatBoxProps } from "../../../interfaces/resultPage";
import Description from "../description";
import { Container, Title } from "./index.style";

const TreatmentBox = ({ title, description }: ITreatBoxProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Description text={description} />
    </Container>
  );
};

export default TreatmentBox;
