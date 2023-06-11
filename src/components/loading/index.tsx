import { ReactNode } from "react";
import { Container, IconContainer } from "./index.style";

export interface ILoading {
  title: ReactNode;
  icon: ReactNode;
  bottomInformation?: ReactNode;
}

const Loading = ({ title, icon, bottomInformation }: ILoading) => {
  return (
    <Container>
      {title}
      <IconContainer marginBottom={bottomInformation ? 1.2 : 8.9}>{icon}</IconContainer>
      {bottomInformation ? bottomInformation : null}
    </Container>
  );
};

export default Loading;
