import { configureStore } from "@reduxjs/toolkit";
import { UnistoryApi } from "./UnistoryApi";
import loginSlice from "./loginSlice";
export const store = configureStore({
  reducer: {
    [UnistoryApi.reducerPath]: UnistoryApi.reducer,
    log: loginSlice,
  },
  middleware: (gerDefaultMiddleware) =>
    gerDefaultMiddleware().concat(UnistoryApi.middleware),
});
