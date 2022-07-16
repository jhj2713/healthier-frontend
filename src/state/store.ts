import { configureStore } from "@reduxjs/toolkit";
import exampleReducer from "./exampleSlice";
import userReducer from "./userSlice";
import answerReducer from "./answerSlice";

export const store = configureStore({
  reducer: {
    example: exampleReducer,
    user: userReducer,
    answer: answerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
