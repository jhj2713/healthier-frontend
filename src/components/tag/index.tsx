import { HTMLAttributes } from "react";
import { Container } from "./index.style";

export interface ITag extends HTMLAttributes<HTMLDivElement> {
  children: string;
  selected?: boolean;
}

const Tag = ({ children, selected = false, ...props }: ITag) => {
  return (
    <Container selected={selected} {...props}>
      {children}
    </Container>
  );
};

export default Tag;
