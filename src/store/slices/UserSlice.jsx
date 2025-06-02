import { createSlice } from "@reduxjs/toolkit";

const users = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      return [...state, action.payload];
    },
    removeUser: (state, action) => {
      const { id } = action.payload;
      const updatedState = state.filter((user) => user.id !== id);
      return updatedState;
    },
    removeAllUser: (state, action) => {
      return [];
    },
  },
  extraReducers(builder) {
    builder.addCase(users.actions.removeAllUser, (state, action) => {
      return [];
    });
  },
});

export const { addUser, removeUser, removeAllUser } = users.actions;
export default users.reducer;
