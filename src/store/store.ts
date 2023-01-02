import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./main/mainSlice";
import searchReducer from "./main/searchSlice";

export const store = configureStore({
  reducer: {
    main: mainReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
