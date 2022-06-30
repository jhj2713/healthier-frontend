import React from "react";
import styled from "styled-components";

const SelectBox = styled.select`
  background: transparent;

  width: 34.2rem;

  border-radius: 0.8rem;
  border: 0.1rem solid ${({ theme }) => theme.color.grey_600};
  outline: none;

  margin: 2.4rem;
  padding: 1.4rem 1.6rem;

  color: ${({ theme }) => theme.color.grey_600};
  appearance: none;

  font-size: 1.3rem;

  background-image: url("/images/informationPage/Shape.svg");
  background-position: right 1.6rem center;
  background-repeat: no-repeat;

  :focus {
    border: 0.1rem solid ${({ theme }) => theme.color.blue};
  }
`;

const years = Array.from(Array(92).keys())
  .map((y) => y + 1930)
  .reverse();

function YearPicker() {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const target = e.target as HTMLSelectElement;
    console.log(target);
  };

  return (
    <SelectBox onChange={handleChange} defaultValue="">
      <option hidden disabled value="">
        선택해주세요
      </option>
      {years.map((year) => (
        <option key={year} value={year}>
          {year}년
        </option>
      ))}
    </SelectBox>
  );
}

export default YearPicker;
