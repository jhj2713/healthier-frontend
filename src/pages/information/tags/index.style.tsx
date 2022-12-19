import styled from "styled-components";
import { Body_4, Description } from "../../../lib/fontStyle";

export const Container = styled.section`
  margin-top: 3.2rem;
`;

export const Title = styled(Body_4)`
  color: ${({ theme }) => theme.color.grey_300};
`;

export const TagContainer = styled.section`
  display: -webkit-flexbox;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
`;

export const TagBox = styled.section`
  margin-top: 0.8rem;
  margin-right: 0.8rem;
`;

export const DescriptionBox = styled(Description)`
  color: ${({ theme }) => theme.color.grey_500};

  font-size: 1.3rem;
  margin-top: 1.6rem;
`;
