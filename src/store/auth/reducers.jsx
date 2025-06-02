import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./state";

export const auth = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    loggedIn: (state, action) => {
      return { ...state, isLoggedIn: true };
    },
    loggedOut: (state, action) => {
      return { ...state, isLoggedIn: false };
    },
  },
});

export default auth.reducer;
