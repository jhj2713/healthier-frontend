import { Container } from "./index.style";

export interface ITag {
  children: string;
  selected: boolean;
}

const Tag = ({ children, selected }: ITag) => {
  return <Container selected={selected}>{children}</Container>;
};

export default Tag;
