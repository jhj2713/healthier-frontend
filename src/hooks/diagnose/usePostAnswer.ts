import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { diagnosisFetcher } from "src/api/diagnose/fetcher";
import { useAppSelector } from "src/state";
import { usePostSoap } from "./usePostSoap";
import type { IPostAnswersBody } from "src/interfaces/diagnoseApi/diagnosis";
import type { TSymptomType } from "src/interfaces/symptomPage";

interface IUsePostAnswer extends IPostAnswersBody {
  diagnoseType: TSymptomType;
}

export const usePostAnswer = ({ diagnoseType, user, answers }: IUsePostAnswer) => {
  const navigate = useNavigate();
  const { hospitalId } = useAppSelector((appState) => appState.diagnose);

  const { postSoap } = usePostSoap({ hospitalId });

  const { mutate: postAnswer, isPending } = useMutation({
    mutationFn: () =>
      diagnosisFetcher.postAnswers(diagnoseType, {
        user,
        answers,
      }),
    onSuccess(data) {
      if (hospitalId) {
        postSoap({ userId: data.user_id });
      }

      navigate("/result-list", {
        state: data.diagnosis,
      });
    },
    mutationKey: [hospitalId],
  });

  return { postAnswer, isPending };
};
