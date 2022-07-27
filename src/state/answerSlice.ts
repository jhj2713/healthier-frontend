import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AnswerState {
  answers: { question_id: string; answer_id: number[] }[];
  period: number;
  cycle: number;
  score: number;
  is_taking_medicine: number;
}

const initialState: AnswerState = {
  answers: [],
  period: 0,
  cycle: 0,
  score: 0,
  is_taking_medicine: 0,
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
    saveScore: (state, action: PayloadAction<number>) => {
      state.score += action.payload;
    },
    saveAnswer: (
      state,
      action: PayloadAction<{ question_id: string; answer_id: number[] }>
    ) => {
      state.answers = [...state.answers, action.payload];
    },
    saveMedicine: (state, action: PayloadAction<number>) => {
      state.is_taking_medicine = action.payload;
    },
    resetAnswer: (state) => {
      state.answers = new Array();
      state.period = 0;
      state.cycle = 0;
      state.score = 0;
      state.is_taking_medicine = 0;
    },
  },
});

export const {
  savePeriod,
  saveCycle,
  saveScore,
  saveAnswer,
  saveMedicine,
  resetAnswer,
} = answerSlice.actions;

export default answerSlice.reducer;
