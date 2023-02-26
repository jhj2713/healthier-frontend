import { ITag } from "src/interfaces/component";
import { Container } from "./index.style";

const Tag = ({ children, selected }: ITag) => {
  return <Container selected={selected}>{children}</Container>;
};

export default Tag;
