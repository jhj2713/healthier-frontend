import { IContentHeader } from "../../interfaces/component";
import styled from "styled-components";
import HeaderContainer from "./HeaderContainer";
import { useNavigate } from "react-router-dom";

const Container = styled.section`
  color: ${({ theme }) => theme.color.grey_200};
  height: inherit;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  position: relative;
`;
const Title = styled.section`
  font-size: 1.6rem;
  font-weight: 200;

  margin-bottom: 1.6rem;
`;
const BackButton = styled.section<{ back: boolean }>`
  opacity: ${({ back }) => (back ? 1 : 0)};

  margin-left: 1.5rem;
  margin-bottom: 0.9rem;
`;
const QuitButton = styled.section`
  margin-bottom: 0.9rem;
  margin-right: 1.5rem;
`;

const ContentHeader = ({ back, text }: IContentHeader) => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Container>
        <BackButton back={back}>
          <img src="/images/header/back.svg" />
        </BackButton>
        <Title>{text}</Title>
        <QuitButton onClick={() => navigate("/")}>
          <img src="/images/header/quit.svg" />
        </QuitButton>
      </Container>
    </HeaderContainer>
  );
};

export default ContentHeader;
