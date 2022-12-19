import { ISymptomTypeComponent } from "../../../interfaces/component";
import { Container, Title, TypeImage } from "./index.style";

const SymptomTypeComponent = ({ selected, title }: ISymptomTypeComponent) => {
  return (
    <Container select={selected}>
      <Title select={selected}>{title}</Title>
      <TypeImage>
        <img
          alt="icon"
          src={`https://healthier.s3.ap-northeast-2.amazonaws.com/client/${title === "신체 건강" ? "body" : "mental"}.png`}
          height={142}
        />
      </TypeImage>
    </Container>
  );
};

export default SymptomTypeComponent;
