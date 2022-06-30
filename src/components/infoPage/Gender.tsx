import styled from "styled-components";
import RectButton from "../buttons/RectButton";
import theme from "../../lib/theme";
import React, { useState } from "react";

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.3rem;

  margin: 2rem;
`;

const Gender = () => {
  const [gender, setGender] = useState(0);

  return (
    <Container>
      <section onClick={() => setGender(1)}>
        <RectButton
          outline={gender === 1 ? "none" : theme.color.grey_600}
          backgroundColor={gender === 1 ? theme.color.sub_blue : "transparent"}
          color={gender === 1 ? theme.color.blue : theme.color.grey_600}
          text="남성"
        />
      </section>
      <section onClick={() => setGender(2)}>
        <RectButton
          outline={gender === 2 ? "none" : theme.color.grey_600}
          backgroundColor={gender === 2 ? theme.color.sub_blue : "transparent"}
          color={gender === 2 ? theme.color.blue : theme.color.grey_600}
          text="여성"
        />
      </section>
    </Container>
  );
};

export default Gender;
