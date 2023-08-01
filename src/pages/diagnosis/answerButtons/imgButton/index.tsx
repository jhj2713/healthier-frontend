import { useAppSelector } from "src/state";
import DigestiveImgButton from "./digestiveImgButton";
import ToothImgButton from "./toothImgButton";
import type { IAnswerButtonProps } from "src/interfaces/diagnosisPage";

function ImgButton(props: IAnswerButtonProps) {
  const { category } = useAppSelector((appState) => appState.diagnose);

  if (category === "소화기 내과") {
    return <DigestiveImgButton {...props} />;
  }

  return <ToothImgButton {...props} />;
}

export default ImgButton;
