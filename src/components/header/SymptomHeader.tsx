import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.header`
  position: fixed;
  width: 100vw;
  top: 0;

  height: 5.6rem;
  letter-spacing: 0.015rem;

  border-bottom: 0.05rem solid ${({ theme }) => theme.color.grey_800};

  background-color: #0c0d10;

  z-index: 3;
`;
const Container = styled.section`
  color: ${({ theme }) => theme.color.grey_200};
  height: inherit;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  position: relative;
`;
const BackButton = styled.section`
  margin-left: 1.5rem;
  margin-bottom: 0.9rem;
`;
const QuitButton = styled.section`
  margin-bottom: 0.9rem;
  margin-right: 1.5rem;
`;

const SymptomHeader = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        <BackButton onClick={() => navigate(-1)}>
          <img
            alt="back"
            src="/images/header/back.svg"
            width={32}
            height={32}
          />
        </BackButton>
        <section></section>
        <QuitButton onClick={() => navigate("/")}>
          <img
            alt="quit"
            src="/images/header/quit.svg"
            width={32}
            height={32}
          />
        </QuitButton>
      </Container>
    </Wrapper>
  );
};

export default SymptomHeader;
