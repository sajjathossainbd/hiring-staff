import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSimilarJobs } from "./similarJobsAPI";

const initialState = {
  similarJobs: [],
  isLoading: false,
  isError: false,
  error: "",
};

// async thunk
export const fetchSimilarJobs = createAsyncThunk(
  "similarJobs/fetchSimilarJobs",
  async ({ category }) => {
    const similarJobs = await getSimilarJobs({ category });
    return similarJobs;
  }
);

const similarJobsSlice = createSlice({
  name: "similarJobs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchSimilarJobs.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchSimilarJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.similarJobs = action.payload;
      })
      .addCase(fetchSimilarJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.similarJobs = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default similarJobsSlice.reducer;
