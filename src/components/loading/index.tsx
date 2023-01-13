import LoadingContainer from "src/components/loadingContainer";
import { ILoading } from "src/interfaces/component";
import { IconContainer } from "./index.style";

const Loading = ({ title, icon }: ILoading) => {
  return (
    <LoadingContainer>
      {title}
      <IconContainer>{icon}</IconContainer>
    </LoadingContainer>
  );
};

export default Loading;
