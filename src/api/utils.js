import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk("users/fetchUsers", async () => {
  const users = await fetch("https://jsonplaceholder.typicode.com/users");
  return users.json();
});
