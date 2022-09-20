import React from "react";
import styled from "styled-components";
import { IYearPickerProps } from "../../interfaces/informationPage";
import { Body_4 } from "../../lib/fontStyle";

const Container = styled.section`
  margin-top: 4.6rem;
`;
const Title = styled(Body_4)`
  color: ${({ theme }) => theme.color.grey_300};

  margin-bottom: 0.8rem;
`;
const SelectBox = styled.select<{ year: number }>`
  cursor: pointer;
  background: transparent;

  width: calc(var(--vw, 1vw) * 100 - 4.8rem);

  border-radius: 0.8rem;
  border: 0.1rem solid ${({ theme }) => theme.color.grey_600};
  outline: none;

  padding: 1.4rem 1.6rem;

  color: ${({ theme, year }) =>
    year !== 0 ? theme.color.grey_300 : theme.color.grey_600};
  appearance: none;

  font-size: 1.5rem;
  line-height: 150%;

  background-image: url("/images/informationPage/dropdown.svg");
  background-position: right 1.6rem center;
  background-repeat: no-repeat;

  :focus {
    border: 0.1rem solid ${({ theme }) => theme.color.blue};
    color: ${({ theme }) => theme.color.blue};

    background-image: url("/images/informationPage/dropdown_active.svg");
    background-position: right 1.6rem center;
    background-repeat: no-repeat;
  }
`;

const years = Array.from(Array(92).keys())
  .map((y) => y + 1930)
  .reverse();

function YearPicker({ year, setYear }: IYearPickerProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const target = e.target as HTMLSelectElement;
    setYear(Number(target.value));
  };

  return (
    <Container>
      <Title>출생연도</Title>
      <SelectBox onChange={handleChange} defaultValue="" year={year}>
        <option hidden disabled value="">
          선택해주세요
        </option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}년
          </option>
        ))}
      </SelectBox>
    </Container>
  );
}

export default YearPicker;
