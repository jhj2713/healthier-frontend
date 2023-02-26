import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AnswerState {
  answers: { question_id: string | number; answer_id: number[] }[];
}

const initialState: AnswerState = {
  answers: [],
};

export const answerSlice = createSlice({
  name: "answer",
  initialState,
  reducers: {
    popAnswer: (state) => {
      state.answers.pop();
    },
    saveAnswer: (state, action: PayloadAction<{ question_id: string; answer_id: number[] }>) => {
      state.answers = [...state.answers, action.payload];
    },
    resetAnswer: (state) => {
      state.answers = [];
    },
  },
});

export const { popAnswer, saveAnswer, resetAnswer } = answerSlice.actions;

export default answerSlice.reducer;
