import Chips from "../lib/chips";
import Title from "../lib/Title";
import * as Styled from "./index.style";
import type { TDefinitionData } from "src/interfaces/resultPage";

interface IDefinitionPageProps {
  data: TDefinitionData;
}

const DefinitionPage = ({ data }: IDefinitionPageProps) => {
  const {
    description: { title, content, keySymptom },
    cause: { description, tags },
  } = data;

  return (
    <Styled.Container>
      <Styled.DescriptionBox top={2} bottom={8}>
        <Title text={title} />
        <Styled.Description>{content}</Styled.Description>

        <Styled.KeySymptomContainer>
          <Styled.SymptomText>다음과 같은 증상이 나타날 수 있어요</Styled.SymptomText>
          <Chips labels={keySymptom} />
        </Styled.KeySymptomContainer>
      </Styled.DescriptionBox>

      <Styled.DescriptionBox top={0} bottom={8}>
        <Title text="원인이 무엇인가요?" />
        <Styled.CauseTagsContainer marginBottom={tags[0].title ? "1.6rem" : "0"}>
          {tags.map((tag, index) =>
            tag.title !== null ? (
              <Styled.CauseTagBox key={tag.title}>
                <Styled.CauseTag variant={index === 0 ? "primary" : "secondary"}>#{tag.title}</Styled.CauseTag>
                <Styled.CauseText>{tag.content}</Styled.CauseText>
              </Styled.CauseTagBox>
            ) : undefined
          )}
        </Styled.CauseTagsContainer>
        <Styled.Description>{description}</Styled.Description>
      </Styled.DescriptionBox>
    </Styled.Container>
  );
};

export default DefinitionPage;
