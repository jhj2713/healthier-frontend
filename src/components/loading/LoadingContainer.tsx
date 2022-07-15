import styled from "styled-components";

const Container = styled.section`
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);

  background: radial-gradient(
      300.02% 130.63% at 164.62% 165.58%,
      rgba(84, 100, 242, 0.9) 0%,
      rgba(52, 62, 135, 0) 100%
    ),
    #131416;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoadingContainer = ({ children }: { children: JSX.Element }) => {
  return <Container>{children}</Container>;
};

export default LoadingContainer;
