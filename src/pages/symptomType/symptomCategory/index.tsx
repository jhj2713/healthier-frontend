import { useState } from "react";
import CheckIcon from "src/assets/icons/CheckIcon";
import ChevronDownIcon from "src/assets/icons/ChevronDownIcon";
import ChevronUpIcon from "src/assets/icons/ChevronUpIcon";
import theme from "src/lib/theme";
import { useAppDispatch } from "src/state";
import { setCategory } from "src/state/diagnoseSlice";
import * as Styled from "./index.style";
import type { TDiagnoseType, TSymptomType, TDiagnoseCategory } from "src/interfaces/symptomPage";

interface ISymptomCategory {
  diagnoseType: TDiagnoseType;
  selectedSymptom: TSymptomType | null;
  setSelectedSymptom: React.Dispatch<React.SetStateAction<TSymptomType | null>>;
}

function SymptomCategory({ diagnoseType, selectedSymptom, setSelectedSymptom }: ISymptomCategory) {
  const { category, symptoms } = diagnoseType;
  const [isCategoryOpen, setIsCategoryOpen] = useState<{ [category in TDiagnoseCategory]: boolean }>({
    치과: true,
    "소화기 내과": false,
  });

  const dispatch = useAppDispatch();

  const handleClickCategory = (e: React.MouseEvent<HTMLDivElement>) => {
    const selectedCategory = e.currentTarget.dataset.category as TDiagnoseCategory;

    setIsCategoryOpen({
      ...isCategoryOpen,
      [selectedCategory]: !isCategoryOpen[selectedCategory],
    });
  };

  const handleClickSymptom = (e: React.MouseEvent<HTMLLIElement>) => {
    setSelectedSymptom(e.currentTarget.dataset.symptom as TSymptomType);
    dispatch(setCategory({ category }));
  };

  return (
    <Styled.Container>
      <Styled.ListHeader onClick={handleClickCategory} data-category={category}>
        <Styled.CategoryName>{category}</Styled.CategoryName>

        {isCategoryOpen[category] ? <ChevronUpIcon stroke={theme.color.grey_100} /> : <ChevronDownIcon stroke={theme.color.grey_100} />}
      </Styled.ListHeader>

      <Styled.SymptomList>
        {isCategoryOpen[category] &&
          symptoms.map((symptom) => (
            <Styled.SymptomItem key={symptom} data-symptom={symptom} onClick={handleClickSymptom}>
              <Styled.SymptomName selected={symptom === selectedSymptom}>{symptom}</Styled.SymptomName>
              {symptom === selectedSymptom && <CheckIcon width={24} height={24} />}
            </Styled.SymptomItem>
          ))}
      </Styled.SymptomList>
    </Styled.Container>
  );
}

export default SymptomCategory;
