import { forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import imageUrl from "src/data/image_url";
import { symptom_type } from "src/data/symptom_type";
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
          <Description>헬시어가 증상 감별을 준비중이에요!</Description>
          <Title>
            현재 감별 가능한 증상은
            <br />
            <span className="highlight">{symptom_type[select].detail}</span>입니다
          </Title>
          <NoteImage>
            <img className="image" alt="icon" src={imageUrl.symptom_modal} />
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

SymptomModal.displayName = "SymptomModal";

export default SymptomModal;
