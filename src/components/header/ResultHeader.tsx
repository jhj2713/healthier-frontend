import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header<{ isCover: boolean }>`
  position: fixed;

  height: 5.6rem;
  width: 100%;
  letter-spacing: 0.015rem;

  border-bottom: ${({ isCover, theme }) => !isCover && `0.05rem solid ${theme.color.grey_800}`};

  z-index: 3;

  background-color: ${({ isCover, theme }) => (isCover ? "transparent" : theme.color.grey_900)};
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
  width: 3.2rem;
  height: 3.2rem;

  margin-left: 1.5rem;
  margin-bottom: 0.9rem;
`;
const QuitButton = styled.section`
  margin-bottom: 0.9rem;
  margin-right: 1.5rem;

  cursor: pointer;
`;

const ResultHeader = ({ isCover }: { isCover: boolean }) => {
  const navigate = useNavigate();

  return (
    <HeaderContainer isCover={isCover}>
      <Container>
        <BackButton />
        <Title isCover={isCover}>진단결과</Title>
        <QuitButton onClick={() => navigate("/")}>
          <img alt="quit" src="/images/header/quit.svg" width={32} height={32} />
        </QuitButton>
      </Container>
    </HeaderContainer>
  );
};

export default ResultHeader;
