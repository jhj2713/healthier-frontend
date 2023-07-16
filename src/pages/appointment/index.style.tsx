import { Heading_3 } from "src/lib/fontStyle";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CardContainer = styled.div`
  margin-top: 1.6rem;
`;

export const LoadingTitle = styled(Heading_3)`
  text-align: center;
  word-break: keep-all;
  color: ${({ theme }) => theme.color.grey_200};
`;
