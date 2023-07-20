import styled from "styled-components";

export const PartContainer = styled.div<{ isSelected: boolean }>`
  display: inline-flex;
  align-items: center;

  gap: 0.2rem;

  padding: 0.6rem 1rem;
  border-radius: 6rem;
  background-color: ${({ theme, isSelected }) => (isSelected ? theme.color.blue : theme.color.grey_850)};

  font-size: 1.3rem;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  color: ${({ theme, isSelected }) => (isSelected ? theme.color.white : theme.color.grey_300)};

  cursor: pointer;
`;

export const MedicineContainer = styled.div<{ isSelected: boolean }>`
  display: inline-block;

  padding: 0.8rem 1rem;
  border-radius: 6rem;
  background-color: ${({ theme, isSelected }) => (isSelected ? theme.color.blue : theme.color.grey_850)};

  font-size: 1.3rem;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  color: ${({ theme, isSelected }) => (isSelected ? theme.color.white : theme.color.grey_300)};
`;

export const EmergencyNightContainer = styled.div<{ isSelected: boolean }>`
  display: inline-block;

  padding: 0.5rem 1rem;
  border-radius: 3rem;
  background-color: ${({ theme, isSelected }) => (isSelected ? theme.color.sub_blue : "transparent")};
  border: 1px solid ${({ theme, isSelected }) => (isSelected ? theme.color.sub_blue : theme.color.blue)};

  font-size: 1.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.05rem;
  color: ${({ theme }) => theme.color.blue};

  & + & {
    margin-left: 0.8rem;
  }
`;
