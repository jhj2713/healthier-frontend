import Button from "../../../components/button";
import { IGenderProps } from "../../../interfaces/informationPage";
import { Container, Title } from "./index.style";

const Gender = ({ gender, setGender }: IGenderProps) => {
  return (
    <Container>
      <Title>성별</Title>
      <section className="gender-container">
        <div className="male" onClick={() => setGender("m")}>
          <Button selected={gender === "m"}>남성</Button>
        </div>
        <div className="female" onClick={() => setGender("f")}>
          <Button selected={gender === "f"}>여성</Button>
        </div>
      </section>
    </Container>
  );
};

export default Gender;
