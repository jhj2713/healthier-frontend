import { createSlice } from "@reduxjs/toolkit";
import { IDiagnoseState } from "./index";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: IDiagnoseState = {
  category: "소화기 내과",
};

export const diagnoseSlice = createSlice({
  name: "diagnose",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<IDiagnoseState>) => {
      state.category = action.payload.category;
    },
  },
});

export const { setCategory } = diagnoseSlice.actions;
export default diagnoseSlice.reducer;
