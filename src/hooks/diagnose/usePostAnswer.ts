import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { diagnosisFetcher } from "src/api/diagnose/fetcher";
import type { IPostAnswersBody } from "src/interfaces/diagnoseApi/diagnosis";
import type { TSymptomType } from "src/interfaces/symptomPage";

interface IUsePostAnswer extends IPostAnswersBody {
  diagnoseType: TSymptomType;
}

export const usePostAnswer = ({ diagnoseType, user, answers }: IUsePostAnswer) => {
  const navigate = useNavigate();

  const { mutate: postAnswer, isPending } = useMutation({
    mutationFn: () =>
      diagnosisFetcher.postAnswers(diagnoseType, {
        user,
        answers,
      }),
    onSuccess(data) {
      navigate("/result-list", {
        state: data.diagnosis,
      });
    },
  });

  return { postAnswer, isPending };
};
