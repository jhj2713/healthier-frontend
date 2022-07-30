import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from ".";

export const TOKEN_TIME_OUT = 600 * 1000;

const initialState: AuthState = {
  authenticated: false,
  accessToken: null,
  expireTime: null,
};

export const authSlice = createSlice({
  name: "authToken",
  initialState: initialState,
  reducers: {
    SET_TOKEN: (state: AuthState, action) => {
      state.authenticated = true;
      state.accessToken = action.payload;
      state.expireTime = new Date().getTime() + TOKEN_TIME_OUT;
    },
    DELETE_TOKEN: (state: AuthState) => {
      state.authenticated = false;
      state.accessToken = null;
      state.expireTime = null;
    },
  },
});

export const { SET_TOKEN, DELETE_TOKEN } = authSlice.actions;

export default authSlice.reducer;
