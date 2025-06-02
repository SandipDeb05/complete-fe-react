import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "../../api/utils";

const admin = createSlice({
  name: "admin",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {
    greet: (state) => {
      return { ...state, status: "STOP" };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.data = action.payload;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export const { greet } = admin.actions;
export default admin.reducer;
