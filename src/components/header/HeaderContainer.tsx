import styled from "styled-components";

const Container = styled.header`
  height: 9.6rem;
  letter-spacing: 0.015rem;

  border-bottom: 0.05rem solid ${({ theme }) => theme.color.grey_800};
`;

const HeaderContainer = ({ children }: { children: JSX.Element }) => {
  return <Container>{children}</Container>;
};

export default HeaderContainer;
