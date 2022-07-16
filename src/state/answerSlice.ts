import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AnswerState {
  answers: { question_id: string; answer_id: number[] }[];
  period: number;
  cycle: number;
  sleepScore: number;
}

const initialState: AnswerState = {
  answers: [],
  period: 0,
  cycle: 0,
  sleepScore: 0,
};

export const answerSlice = createSlice({
  name: "answer",
  initialState,
  reducers: {
    savePeriod: (state, action: PayloadAction<number>) => {
      state.period = action.payload;
    },
    saveCycle: (state, action: PayloadAction<number>) => {
      state.cycle = action.payload;
    },
    saveSleepScore: (state, action: PayloadAction<number>) => {
      state.sleepScore += action.payload;
    },
    saveAnswer: (
      state,
      action: PayloadAction<{ question_id: string; answer_id: number[] }>
    ) => {
      state.answers = [...state.answers, action.payload];
    },
  },
});

export const { savePeriod, saveCycle, saveSleepScore, saveAnswer } =
  answerSlice.actions;

export default answerSlice.reducer;
