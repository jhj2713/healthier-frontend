import { createSlice } from "@reduxjs/toolkit";
import { BodyPart } from "src/interfaces/symptomPage";
import { UserState, fillInfoAction } from "./index";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: UserState = {
  id: 0,
  name: "",
  email: "",
  gender: "",
  birth_year: 0,
  interests: [],
  site: [],
  age: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userSubmit: (state, action: PayloadAction<fillInfoAction>) => {
      state.gender = action.payload.gender;
      state.birth_year = action.payload.birth_year;
      state.interests = [...action.payload.interests];
      state.age = new Date().getFullYear() - action.payload.birth_year;
    },
    setSite: (state, action: PayloadAction<BodyPart[]>) => {
      state.site = action.payload;
    },
  },
});

export const { userSubmit, setSite } = userSlice.actions;
export default userSlice.reducer;
