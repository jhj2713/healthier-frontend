import { createSlice } from "@reduxjs/toolkit";
import { BodyPart } from "src/interfaces/symptomPage";
import { UserState, fillInfoAction, IQRInfoAction } from "./index";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: UserState = {
  id: 0,
  name: "",
  email: "",
  gender: "",
  birth: {
    year: 0,
    month: 0,
    date: 0,
  },
  interests: [],
  site: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userSubmit: (state, action: PayloadAction<fillInfoAction>) => {
      state.gender = action.payload.gender;
      state.birth = action.payload.birth;
      state.interests = [...action.payload.interests];
    },
    setSite: (state, action: PayloadAction<BodyPart[]>) => {
      state.site = action.payload;
    },
    setQRInformation: (state, action: PayloadAction<IQRInfoAction>) => {
      state.gender = action.payload.gender;
      state.name = action.payload.name;
      state.birth = action.payload.birth;
    },
    clearUserName: (state) => {
      state.name = "";
    },
  },
});

export const { userSubmit, setSite, setQRInformation, clearUserName } = userSlice.actions;
export default userSlice.reducer;
