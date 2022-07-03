import { useState } from "react";
import styled from "styled-components";
import Gender from "../components/infoPage/Gender";
import RoundButton from "../components/buttons/RoundButton";
import theme from "../lib/theme";
import Tags from "../components/infoPage/Tags";
import YearPicker from "../components/infoPage/YearPicker";
import { useAppDispatch } from "../state";
import { userSubmit } from "../state/userSlice";

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

const health_arr = [
  { id: 1, name: "금연", selected: false },
  { id: 2, name: "금주", selected: false },
  { id: 3, name: "노화방지", selected: false },
  { id: 4, name: "다이어트", selected: false },
  { id: 5, name: "수면", selected: false },
  { id: 6, name: "암예방", selected: false },
  { id: 7, name: "영양제", selected: false },
  { id: 8, name: "건강검진", selected: false },
  { id: 9, name: "미용", selected: false },
];

const Information = () => {
  const [active, setActive] = useState(false);
  const [year, setYear] = useState(0);
  const [health, setHealth] = useState(health_arr);
  const [gender, setGender] = useState("");

  const dispatch = useAppDispatch();

  const handleProceed = () => {
    const healthId = health.map((item) => item.id);
    dispatch(userSubmit({ gender, birth_year: year, interests: healthId }));
  };

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
      <ButtonBox
        onClick={() => {
          setActive(!active);
          handleProceed();
        }}
      >
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
