import { useQuery } from "@tanstack/react-query";
import { diagnosisFetcher } from "src/api/diagnosis/fetcher";
import { queryKeys } from "src/api/queryKeys";
import type { IDDXResultResponse } from "src/interfaces/diagnoseApi/result";

export const useGetDDXResult = (dx_id: number) => {
  const { data: resultData, isLoading } = useQuery<IDDXResultResponse>({
    queryKey: [queryKeys.RESULT, dx_id],
    queryFn: () => diagnosisFetcher.getDDXResult(dx_id),
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });

  return {
    resultData,
    isLoading,
  };
};
