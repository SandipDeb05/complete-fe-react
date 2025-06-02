import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./slices/UserSlice";
import adminSlice from "./slices/AdminSlice";
import commonSlice from "./common/reducers";
import authSlice from "./auth/reducers";

const store = configureStore({
  reducer: {
    users: usersSlice,
    admin: adminSlice,
    auth: authSlice,
    common: commonSlice,
  },
});

export default store;
