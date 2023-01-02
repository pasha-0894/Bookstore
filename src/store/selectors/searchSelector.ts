import { RootState } from "store/store";

export const getBooksBySearch = (state: RootState) => state.search;
