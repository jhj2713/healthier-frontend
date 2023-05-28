import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { BodyPart } from "src/interfaces/symptomPage";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

////////////////////////////////
/// USER STATE RELATED TYPES ///
////////////////////////////////

export interface UserState {
  id: number;
  name: string;
  email: string;
  gender: string;
  birth_year: number;
  interests: number[];
  site: BodyPart[];
}

export interface fillInfoAction {
  gender: string;
  birth_year: number;
  interests: number[];
}

export interface AuthState {
  authenticated: boolean;
  accessToken: any;
  expireTime: any;
}
