import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../auth/AuthSlice";
import apiDataSlice from "../dataApi/DataSlice";

export const store = configureStore({
  reducer: {
    auth: AuthSlice,
    data: apiDataSlice,
  },
});
