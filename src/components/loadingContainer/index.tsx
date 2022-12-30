import { ReactNode } from "react";
import { Container } from "./index.style";

const LoadingContainer = ({ children }: { children: ReactNode }) => {
  return <Container>{children}</Container>;
};

export default LoadingContainer;
