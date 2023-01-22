import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IDetailsState {
  isLoading: boolean;
  info: any;
}

const initialState: IDetailsState = {
  isLoading: false,
  info: {},
};

export const fetchDetails = createAsyncThunk<any[], string>(
  "details/fetchDetails",
  async (isbn) => {
    return await fetch(`https://api.itbook.store/1.0/books/${isbn}`).then((response) => {
      return response.json();
    });
  },
);

const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.info = action.payload;
    });
    builder.addCase(fetchDetails.rejected, (state, action) => {});
  },
});

export default detailsSlice.reducer;
