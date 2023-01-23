import { ILoading } from "src/interfaces/component";
import { Container, IconContainer } from "./index.style";

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
