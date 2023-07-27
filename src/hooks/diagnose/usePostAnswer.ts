import { useMutation } from "@tanstack/react-query";
import { diagnosisFetcher } from "src/api/diagnose/fetcher";
import type { IPostAnswersBody } from "src/interfaces/diagnoseApi/diagnosis";
import type { TSymptomType } from "src/interfaces/symptomPage";

interface IUsePostAnswer extends IPostAnswersBody {
  diagnoseType: TSymptomType;
}

export const usePostAnswer = ({ diagnoseType, user, answers }: IUsePostAnswer) => {
  const { mutate: postAnswer, isPending } = useMutation({
    mutationFn: () =>
      diagnosisFetcher.postAnswers(diagnoseType, {
        user,
        answers,
      }),
  });

  return { postAnswer, isPending };
};
