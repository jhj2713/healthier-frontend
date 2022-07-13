import { useRef } from "react";
import styled from "styled-components";
import { Body_4, Heading_5 } from "../../lib/fontStyle";
import { symptom_type } from "../../store/symptom_type";
import { useNavigate } from "react-router-dom";
import { ISymptomModal } from "../../interfaces/modal";

const Wrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);

  background-color: rgba(0, 0, 0, 0.6);

  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.section`
  position: absolute;

  width: calc(100vw - 4rem);
  height: 44rem;

  border-radius: 0.8rem;

  background: radial-gradient(
      181.28% 184.02% at -58.92% 120.58%,
      rgba(210, 250, 100, 0.9) 0%,
      rgba(84, 100, 243, 0) 100%
    ),
    #5464f2;
`;
const QuitImage = styled.section`
  display: flex;
  justify-content: flex-end;

  margin-top: 1.4rem;
  margin-right: 1.4rem;
`;
const Description = styled(Body_4)`
  color: ${({ theme }) => theme.color.grey_200};

  margin-top: 2.4rem;
`;
const Highlight = styled.span`
  color: ${({ theme }) => theme.color.green};
`;
const Title = styled(Heading_5)`
  color: ${({ theme }) => theme.color.grey_200};
  text-align: center;

  margin-top: 0.4rem;
`;
const Contents = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
  width: 100%;
`;
const ButtonContainer = styled.section`
  position: absolute;
  bottom: 2rem;

  width: 100%;

  display: flex;
  justify-content: center;
`;
const BottomButton = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: calc(100vw - 6.8rem);
  height: 4.9rem;

  background-color: ${({ theme }) => theme.color.sub_blue};

  border-radius: 3rem;
  cursor: pointer;
`;
const ButtonText = styled.section`
  color: ${({ theme }) => theme.color.blue};

  font-size: 1.5rem;
  font-weight: 300;
  line-height: 150%;

  text-align: center;
`;

const SymptomModal = ({ setModal, select }: ISymptomModal) => {
  const wrapperRef = useRef(null);
  const navigate = useNavigate();

  const handleModalClose = (e: React.MouseEvent) => {
    if (wrapperRef.current === e.target) {
      setModal(false);
    }
  };
  const handleNavigate = () => {
    if (select === 0) {
      navigate("/diagnosis", { state: "sleepdisorder" });
    } else {
      navigate("/symptom");
    }
  };

  return (
    <Wrapper ref={wrapperRef} onClick={handleModalClose}>
      <Container>
        <QuitImage onClick={() => setModal(false)}>
          <img
            alt="quit"
            src="/images/header/quit.svg"
            width={32}
            height={32}
          />
        </QuitImage>
        <Contents>
          <Description>헬시어가 증상 진단을 준비중이에요!</Description>
          <Title>
            현재 진단 가능한 증상은
            <br />
            <Highlight>{symptom_type[select].detail}</Highlight>입니다
          </Title>
        </Contents>
        <ButtonContainer onClick={handleNavigate}>
          <BottomButton>
            <ButtonText>확인했어요</ButtonText>
          </BottomButton>
        </ButtonContainer>
      </Container>
    </Wrapper>
  );
};

export default SymptomModal;
