import { useState } from "react";
import styled from "styled-components";
import Gender from "../components/infoPage/Gender";
import RoundButton from "../components/buttons/RoundButton";
import theme from "../lib/theme";
import Tags from "../components/infoPage/Tags";
import YearPicker from "../components/infoPage/YearPicker";

const Buttons = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.3rem;

  margin: 2rem;
`;

const Information = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <YearPicker />
      <Gender />
      <Tags />
      <Buttons onClick={() => setActive(!active)}>
        <RoundButton
          outline="none"
          backgroundColor={active ? theme.color.blue : theme.color.grey_750}
          color={active ? theme.color.grey_100 : theme.color.grey_600}
          text="증상 진단하러 가기"
        />
      </Buttons>
    </>
  );
};

export default Information;
