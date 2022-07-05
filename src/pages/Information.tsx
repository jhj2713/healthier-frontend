import { useEffect, useState } from "react";
import styled from "styled-components";
import Gender from "../components/infoPage/Gender";
import RoundButton from "../components/buttons/RoundButton";
import theme from "../lib/theme";
import Tags from "../components/infoPage/Tags";
import YearPicker from "../components/infoPage/YearPicker";
import { useAppDispatch } from "../state";
import { userSubmit } from "../state/userSlice";
import { health_interest } from "../store/interest";

const ButtonBox = styled.section`
  position: fixed;
  bottom: 0;
  margin: 0 2rem 3rem 2rem;
  font-size: 1.3rem;
`;
const Title = styled.section`
  font-size: 2.2rem;

  color: ${({ theme }) => theme.color.grey_200};

  margin-top: 4rem;

  line-height: 140%;
  font-weight: 300;
`;
const Contents = styled.section`
  margin: 0 2.4rem 12rem 2.4rem;
`;

const Information = () => {
  const [active, setActive] = useState(false);
  const [year, setYear] = useState(0);
  const [health, setHealth] = useState(health_interest);
  const [gender, setGender] = useState("");

  const dispatch = useAppDispatch();

  const handleProceed = () => {
    if (active) {
      const healthId = health
        .filter((item) => item.selected)
        .map((item) => item.id);
      dispatch(userSubmit({ gender, birth_year: year, interests: healthId }));
    }
  };

  useEffect(() => {
    if (
      year !== 0 &&
      health.filter((item) => item.selected).length !== 0 &&
      gender
    ) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [year, health, gender]);

  return (
    <>
      <Contents>
        <Title>
          잠깐! <br />더 나은 진단 서비스를 위해
          <br /> 간단한 정보가 필요해요
        </Title>
        <YearPicker year={year} setYear={setYear} />
        <Gender gender={gender} setGender={setGender} />
        <Tags health={health} setHealth={setHealth} />
      </Contents>
      <ButtonBox onClick={handleProceed}>
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
