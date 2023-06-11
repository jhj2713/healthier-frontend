import { Container } from "./index.style";

export type ITreatmentType = "therapy" | "inspection";
export interface ITreatmentTag {
  type: ITreatmentType;
}

const TreatmentTag = ({ type }: ITreatmentTag) => {
  return <Container type={type}>{type === "therapy" ? "치료" : "검사"}</Container>;
};

export default TreatmentTag;
