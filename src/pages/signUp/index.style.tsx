import { Heading_3 } from "src/lib/fontStyle";
import styled from "styled-components";

export const Container = styled.div`
  padding: 5.6rem 2rem 0 2rem;
`;

export const H3 = styled(Heading_3)`
  margin-top: 3.2rem;
  color: ${({ theme }) => theme.color.grey_200};
`;

export const Form = styled.form`
  margin-top: 5.4rem;
`;

export const TextFieldWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const TextFieldContainer = styled.div``;

export const Hypen = styled.span`
  display: block;
  height: 1.4px;
  width: 0.8rem;
  margin: 0 0.8rem;
  background: ${({ theme }) => theme.color.grey_600};
  flex-shrink: 0;
`;

export const RoundButtonContainer = styled.div`
  position: fixed;
  bottom: 0;
  padding-top: 0.6rem;
  padding-bottom: 3rem;
`;

export const ContentContainer = styled.ul``;
export const ContentItem = styled.li`
  font-size: 1.6rem;
  line-height: 1.25em;
  color: ${({ theme }) => theme.color.grey_400};
  font-weight: 200;
  padding: 1.4rem 0;
  margin-bottom: 0.4rem;
  cursor: pointer;
`;
