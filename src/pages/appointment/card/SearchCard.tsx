import { HTMLAttributes } from "react";
import styled from "styled-components";
import * as Styled from "./index.style";

interface ISearchCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  category: string;
  status: "OPEN" | "CLOSED" | "UNKNOWN";
  distance: string;
  address: string;
}
const statusMap = {
  OPEN: "진료중",
  CLOSED: "진료마감",
  UNKNOWN: "정보없음",
} as const;

const SearchCard = ({ title, category, status, distance, address, ...props }: ISearchCardProps) => {
  return (
    <Container {...props}>
      <Styled.HeaderContainer>
        <div className="left-content">
          <Styled.Title>{title}</Styled.Title>
          <Styled.Category>{category}</Styled.Category>
        </div>
        <Styled.Status isEnd={status !== "OPEN"}>{statusMap[status]}</Styled.Status>
      </Styled.HeaderContainer>

      <Styled.Description>
        {distance}
        {distance && address && " ㅣ "}
        {address}
      </Styled.Description>
    </Container>
  );
};

export default SearchCard;

const Container = styled.div`
  padding: 2rem 1.8rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  border-bottom: 0.6px solid ${({ theme }) => theme.color.grey_600};
`;
