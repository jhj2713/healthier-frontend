import { forwardRef } from "react";
import { symptom_type } from "src/data/symptom_type";
import { useNavigate } from "react-router-dom";
import { ISymptomModal } from "src/interfaces/modal";
import { Wrapper, Container, Contents, Description, Title, NoteImage, ButtonContainer } from "./index.style";

const SymptomModal = forwardRef<HTMLDivElement, ISymptomModal>(({ closeModal, select }, ref) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (select === 0) {
      navigate("/diagnosis", { state: "sleepdisorder" });
    } else {
      navigate("/symptom", { state: "symptom" });
    }
  };

  return (
    <Wrapper>
      <Container ref={ref}>
        <section className="exit-image" onClick={closeModal}>
          <img alt="exit" src="/images/header/exit.svg" width={32} height={32} />
        </section>
        <Contents>
          <Description>헬시어가 증상 진단을 준비중이에요!</Description>
          <Title>
            현재 진단 가능한 증상은
            <br />
            <span className="highlight">{symptom_type[select].detail}</span>입니다
          </Title>
          <NoteImage>
            <img
              className="image"
              alt="icon"
              src="https://healthier.s3.ap-northeast-2.amazonaws.com/client/%ED%8C%9D%EC%97%85-%EC%A7%84%EB%8B%A8+%EA%B0%80%EB%8A%A5%ED%95%9C+%EC%A6%9D%EC%83%81-%EC%88%98%EB%A9%B4%EC%9E%A5%EC%95%A0.png"
            />
          </NoteImage>
        </Contents>
        <ButtonContainer onClick={handleNavigate}>
          <section className="bottom-button">
            <section className="button-text">확인했어요</section>
          </section>
        </ButtonContainer>
      </Container>
    </Wrapper>
  );
});

export default SymptomModal;
