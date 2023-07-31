import { useMutation } from "@tanstack/react-query";
import { hospitalFetcher } from "src/api/hospital";
import { useAppDispatch } from "src/state";
import { clearHospitalId } from "src/state/diagnoseSlice";

export const usePostSoap = ({ hospitalId }: { hospitalId: string }) => {
  const dispatch = useAppDispatch();

  const { mutate: postSoap } = useMutation({
    mutationFn: ({ userId }: { userId: string }) => hospitalFetcher.postSoap({ hospitalId, userId }),
    onSuccess: () => {
      dispatch(clearHospitalId());
    },
  });

  return { postSoap };
};
