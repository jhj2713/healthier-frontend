import { useState } from "react";
import styled from "styled-components";
import Gender from "../components/infoPage/Gender";
import RoundButton from "../components/buttons/RoundButton";
import theme from "../lib/theme";
import Tags from "../components/infoPage/Tags";
import YearPicker from "../components/infoPage/YearPicker";

const ButtonBox = styled.section`
  position: absolute;
  bottom: 0;
  margin: 0 2rem 3.4rem 2rem;
  font-size: 1.3rem;
`;
const Title = styled.section`
  font-size: 2.2rem;

  color: ${({ theme }) => theme.color.grey_200};

  margin-top: 4rem;

  line-height: 150%;
  font-weight: bolder;
`;
const Contents = styled.section`
  margin: 0 2.4rem;
`;

const Information = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <Contents>
        <Title>
          잠깐! <br />더 나은 진단 서비스를 위해
          <br /> 간단한 정보가 필요해요
        </Title>
        <YearPicker />
        <Gender />
        <Tags />
      </Contents>
      <ButtonBox onClick={() => setActive(!active)}>
        <RoundButton
          outline="none"
          backgroundColor={active ? theme.color.blue : theme.color.grey_750}
          color={active ? theme.color.grey_100 : theme.color.grey_600}
          text="증상 진단하러 가기"
        />
      </ButtonBox>
    </>
  );
};

export default Information;
