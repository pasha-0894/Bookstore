import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { booksAPI } from "services";

interface IBooksState {
  books: any;
  isLoading: boolean;
}

export const fetchMain = createAsyncThunk<any[]>("main/fetchMain", async () => {
  return booksAPI.getNewBooks();
});

const initialState: IBooksState = {
  books: [],
  isLoading: false,
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchMain.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMain.fulfilled, (state, action) => {
      state.books = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchMain.rejected, (state, action) => {});
  },
});

export default mainSlice.reducer;
