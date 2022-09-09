import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AnswerState {
  answers: { question_id: string; answer_id: number[] }[];
  score: number;
  is_taking_medication: number;
}

const initialState: AnswerState = {
  answers: [],
  score: 0,
  is_taking_medication: 0,
};

export const answerSlice = createSlice({
  name: "answer",
  initialState,
  reducers: {
    back: (state) => {
      state.answers.pop();
    },
    saveScore: (state, action: PayloadAction<number>) => {
      state.score = action.payload;
    },
    saveAnswer: (state, action: PayloadAction<{ question_id: string; answer_id: number[] }>) => {
      state.answers = [...state.answers.filter((answer) => answer.question_id !== action.payload.question_id), action.payload];
    },
    saveMedicine: (state, action: PayloadAction<number>) => {
      state.is_taking_medication = action.payload;
    },
    resetAnswer: (state) => {
      state.answers = new Array();
      state.is_taking_medication = 0;
    },
  },
});

export const { back, saveScore, saveAnswer, saveMedicine, resetAnswer } = answerSlice.actions;

export default answerSlice.reducer;
