import { ReactNode } from "react";
import { Container } from "./index.style";

const HeaderContainer = ({ children }: { children: ReactNode }) => {
  return <Container>{children}</Container>;
};

export default HeaderContainer;
