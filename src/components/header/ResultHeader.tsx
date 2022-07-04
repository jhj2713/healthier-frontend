import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  height: 9.6rem;
  width: 100%;
  letter-spacing: 0.015rem;

  border-bottom: 0.05rem solid ${({ theme }) => theme.color.grey_800};

  position: absolute;

  z-index: 3;
`;
const Container = styled.section`
  height: inherit;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  position: relative;
`;
const Title = styled.section<{ isCover: boolean }>`
  color: ${({ theme }) => theme.color.grey_200};
  font-size: 1.6rem;
  font-weight: 200;

  margin-bottom: 1.6rem;

  opacity: ${({ isCover }) => isCover && 0};
`;
const BackButton = styled.section`
  opacity: 0;

  width: 3.2rem;
  height: 3.2rem;

  margin-left: 1.5rem;
  margin-bottom: 0.9rem;
`;
const QuitButton = styled.section`
  margin-bottom: 0.9rem;
  margin-right: 1.5rem;
`;

const ResultHeader = ({ isCover }: { isCover: boolean }) => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Container>
        <BackButton />
        <Title isCover={isCover}>진단결과</Title>
        <QuitButton onClick={() => navigate("/")}>
          <img src="/images/header/quit.svg" />
        </QuitButton>
      </Container>
    </HeaderContainer>
  );
};

export default ResultHeader;
