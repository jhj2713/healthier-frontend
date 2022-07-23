import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { UserState, fillInfoAction } from "./index";

const initialState: UserState = {
  id: 0,
  name: "",
  email: "",
  gender: "",
  birth_year: 0,
  interests: [],
  site: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userSubmit: (state, action: PayloadAction<fillInfoAction>) => {
      state.gender = action.payload.gender;
      state.birth_year = action.payload.birth_year;
      state.interests = [...action.payload.interests];
    },
    setSite: (state, action: PayloadAction<number>) => {
      state.site = action.payload;
    },
  },
});

export const { userSubmit, setSite } = userSlice.actions;
export default userSlice.reducer;
