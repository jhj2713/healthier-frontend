import { useNavigate } from "react-router-dom";
import RoundButton from "src/components/roundButton";
import * as Styled from "./index.style";

interface IPaginationProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  count: number;
}

function Pagination({ page, count }: IPaginationProps) {
  const navigate = useNavigate();

  return (
    <Styled.RootContainer>
      {page === count ? (
        <RoundButton onClick={() => navigate("/appointment")}>병원 예약하기</RoundButton>
      ) : (
        <Styled.ButtonsContainer>
          {[1, 2, 3, 4, 5].slice(0, count).map((index) => (
            <Styled.ButtonWrapper key={index}>
              <Styled.Button isSelected={page === index}>{index}</Styled.Button>
            </Styled.ButtonWrapper>
          ))}
        </Styled.ButtonsContainer>
      )}
    </Styled.RootContainer>
  );
}

export default Pagination;
