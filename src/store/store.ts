import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./main/mainSlice";
import searchReducer from "./main/searchSlice";

import detailsReducer from "./main/detailsSlice";

export const store = configureStore({
  reducer: {
    main: mainReducer,
    search: searchReducer,
    details: detailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
