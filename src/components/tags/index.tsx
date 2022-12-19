import { ITag } from "../../interfaces/component";
import { Container } from "./index.style";

const Tag = ({ text, selected }: ITag) => {
  return <Container selected={selected}>{text}</Container>;
};

export default Tag;
