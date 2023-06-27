import styled from "styled-components";

export const Container = styled.li``;

export const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.4rem 2rem;
  background-color: ${({ theme }) => theme.color.grey_700};
  border-radius: 1.4rem;
  cursor: pointer;
`;

export const CategoryName = styled.p`
  color: ${({ theme }) => theme.color.grey_100};
  font-size: 1.6rem;
  line-height: 1.5em;
  font-weight: 300;
`;

export const SymptomItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SymptomList = styled.ul`
  padding: 0 2rem;
  display: flex;
  gap: 0.4rem;
  flex-direction: column;
  margin: 1.2rem 0;
`;

export const SymptomName = styled.p<{ selected: boolean }>`
  font-size: 1.6rem;
  font-weight: 200;
  color: ${({ theme, selected }) => (selected ? theme.color.grey_200 : theme.color.grey_400)};
  padding: 1.4rem 0;
  cursor: pointer;
`;
