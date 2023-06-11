import { Container } from "./index.style";

export type TTreatmentType = "therapy" | "inspection";
export interface TTreatmentTag {
  type: TTreatmentType;
}

const TreatmentTag = ({ type }: TTreatmentTag) => {
  return <Container type={type}>{type === "therapy" ? "치료" : "검사"}</Container>;
};

export default TreatmentTag;
