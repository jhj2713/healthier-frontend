import styled from "styled-components";

const Container = styled.header`
  position: fixed;
  width: 100vw;
  top: 0;

  height: 9.6rem;
  letter-spacing: 0.015rem;

  border-bottom: 0.05rem solid ${({ theme }) => theme.color.grey_800};

  background-color: ${({ theme }) => theme.color.grey_900};
`;

const HeaderContainer = ({ children }: { children: JSX.Element }) => {
  return <Container>{children}</Container>;
};

export default HeaderContainer;
