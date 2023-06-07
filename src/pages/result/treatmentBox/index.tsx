import { ITreatBoxProps } from "src/interfaces/resultPage";
import Description from "../description";
import { Container, Title, TitleContainer, DropdownIcon, TitleBox } from "./index.style";
import TreatmentTag from "src/components/treatmentTag";
import { useState } from "react";

const TreatmentBox = ({ title, type, description }: ITreatBoxProps) => {
  const [toggle, setToggle] = useState(false);

  return (
    <Container onClick={() => setToggle(!toggle)}>
      <TitleContainer>
        <TitleBox>
          <Title>{title}</Title>
          <TreatmentTag type={type} />
        </TitleBox>
        <DropdownIcon src="/images/informationPage/dropdown.svg" alt="dropdown icon" toggle={toggle} />
      </TitleContainer>
      {toggle && <Description text={description} />}
    </Container>
  );
};

export default TreatmentBox;
