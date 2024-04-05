import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import queueReducer from "../features/queue/queuqSlice.js";
export const store = configureStore({
  reducer: {
    queue: queueReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
