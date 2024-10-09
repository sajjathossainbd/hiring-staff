import { createSlice } from "@reduxjs/toolkit";
import { fetchJobCategories } from "./jobCategoriesAPI";

const jobCategoriesSlice = createSlice({
  name: "jobCategories",
  initialState: {
    categories: [],
    isLoading: false,
    isError: false,
    error: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobCategories.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchJobCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = ["All", ...action.payload];
      })
      .addCase(fetchJobCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default jobCategoriesSlice.reducer;
