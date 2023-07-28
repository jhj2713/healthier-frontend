import * as Styled from "./index.style";

interface IPaginationProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

function Pagination({ page, setPage }: IPaginationProps) {
  const handleClickButton = (index: number) => {
    setPage(index);
  };

  return (
    <Styled.RootContainer>
      <Styled.ButtonsContainer>
        {[1, 2, 3, 4, 5].map((index) => (
          <Styled.ButtonWrapper key={index}>
            <Styled.Button isSelected={page === index} onClick={() => handleClickButton(index)}>
              {index}
            </Styled.Button>
          </Styled.ButtonWrapper>
        ))}
      </Styled.ButtonsContainer>
    </Styled.RootContainer>
  );
}

export default Pagination;
