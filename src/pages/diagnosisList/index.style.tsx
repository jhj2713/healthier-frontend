import styled from "styled-components";
import { Description, Heading_3 } from "../../lib/fontStyle";

export const Container = styled.section`
  padding-top: 5.6rem;
`;

export const ButtonBackground = styled.section`
  position: fixed;
  bottom: 0;

  display: flex;
  flex-direction: column;

  padding: 10.4rem 2rem 3rem 2rem;

  background: linear-gradient(180deg, rgba(19, 20, 22, 0) 0%, rgba(19, 20, 22, 0.947917) 78.12%, #131416 100%);
  pointer-events: none;

  .button-box {
    pointer-events: auto;
  }
`;

export const Title = styled(Heading_3)`
  color: ${({ theme }) => theme.color.grey_200};

  margin: 4rem 2.4rem 0 2.4rem;

  .highlight {
    color: ${({ theme }) => theme.color.green};
  }
`;

export const DescriptionBox = styled(Description)`
  text-align: end;

  color: ${({ theme }) => theme.color.grey_500};

  margin-bottom: 1.2rem;
  margin-right: 2.4rem;

  font-size: 1.3rem;

  .highlight {
    color: ${({ theme }) => theme.color.sub_green};
  }
`;

export const List = styled.section`
  margin: 0 2.4rem 13rem 2.4rem;
`;
