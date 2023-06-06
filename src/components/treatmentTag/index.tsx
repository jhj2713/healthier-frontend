import { Container } from "./index.style";
import { ITreatmentTag } from "src/interfaces/component";

const TreatmentTag = ({ type }: ITreatmentTag) => {
  return <Container type={type}>{type === "therapy" ? "치료" : "검사"}</Container>;
};

export default TreatmentTag;
