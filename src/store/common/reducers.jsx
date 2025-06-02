import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./state";

const common = createSlice({
  name: "common",
  initialState: initialState,
  reducers: {
    showLoader: (state) => {
      return { ...state, isLoading: true };
    },
    hideLoader: (state) => {
      return { ...state, isLoading: false };
    },
  },
});

export default common.reducer;
