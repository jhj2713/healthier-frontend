import styled from "styled-components";

const Container = styled.header`
  position: fixed;
  width: calc(var(--vw, 1vw) * 100);
  top: 0;

  height: 5.6rem;
  letter-spacing: 0.015rem;

  border-bottom: 0.05rem solid ${({ theme }) => theme.color.grey_800};

  background: ${({ theme }) => theme.color.grey_900};

  z-index: 3;
`;

const HeaderContainer = ({ children }: { children: JSX.Element }) => {
  return <Container>{children}</Container>;
};

export default HeaderContainer;
