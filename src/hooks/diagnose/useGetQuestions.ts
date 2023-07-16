import { useQuery } from "@tanstack/react-query";
import { diagnosisFetcher } from "src/api/diagnose/fetcher";
import { queryKeys } from "src/api/queryKeys";
import type { IDiagnoseResponse } from "src/interfaces/diagnoseApi/diagnosis";
import type { TSymptomType } from "src/interfaces/symptomPage";

interface IUseGetQuestions {
  gender: string;
  state: TSymptomType;
}

export const useGetQuestions = ({ gender, state }: IUseGetQuestions) => {
  const { data: questionsData, isLoading } = useQuery<IDiagnoseResponse>({
    queryKey: [queryKeys.DIAGNOSE, gender, state],
    queryFn: () => diagnosisFetcher.getQuestions(state, gender),
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });

  return {
    questionsData,
    isLoading,
  };
};
