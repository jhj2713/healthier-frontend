import styled from "styled-components";
import Title from "../common/Title";
import Description from "../common/Description";
import CauseBox from "./CauseBox";

const Contents = styled.section`
  margin-top: 3.4rem;
  margin-left: 2.4rem;
  width: calc(100vw - 4.8rem);
`;
const DescriptionBox = styled.section<{ top: number }>`
  margin-top: ${({ top }) => top}rem;
  margin-bottom: 9rem;
`;

const DefinitionPage = () => {
  return (
    <>
      <Contents>
        <Title highlight="일주기 리듬 수면 장애" text="란?" />
        <DescriptionBox top={2.4}>
          <Description
            text="일반적인 수면시간에 잠을 잘 수가 없는 증상으로, 늦게 잠이 들고 늦게
          일어나는 지연성 수면 위상증후군과 초저녁에 잠이들어 이른 새벽에 깨는
          전진성 수면위상 증후군으로 나뉘어요."
          />
        </DescriptionBox>
        <Title highlight="" text="원인이 무엇인가요?" />
        <CauseBox
          description_1="수면시간에 맞지 않는 빛의 노출"
          description_2="수면 유전자 이상 호르몬 분비 변화"
        />
        <DescriptionBox top={1.6}>
          <Description text="일주기 리듬을 결정하는 뇌의 생체시계의 셋팅이 일반 사람들의 생활주기와 달라져서 발생해요." />
        </DescriptionBox>
      </Contents>
    </>
  );
};

export default DefinitionPage;
