import styled from "styled-components";

const Container = styled.section`
  display: flex;
`;
const MedicineBox = styled.section<{ selected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 6.6rem;
  height: 6.6rem;

  background-color: ${({ theme }) => theme.color.blue};
  border-radius: 50%;
  border: ${({ selected, theme }) =>
    selected && `0.15rem solid ${theme.color.grey_300}`};
  box-sizing: border-box;

  font-size: 3.2rem;

  opacity: ${({ selected }) => (selected ? 1 : 0.5)};
`;

const Medicine = () => {
  return (
    <Container>
      <MedicineBox selected={true}>💊</MedicineBox>
      <MedicineBox selected={false}>💊</MedicineBox>
    </Container>
  );
};

export default Medicine;
