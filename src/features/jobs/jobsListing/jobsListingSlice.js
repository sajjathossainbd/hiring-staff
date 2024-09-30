import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getJobsListing } from "./jobsListingAPI";

const initialState = {
  jobsListing: [],
  isLoading: false,
  isError: false,
  error: "",
};

// async thunk
export const fetchJobsListing = createAsyncThunk(
  "jobsListing/fetchJobsListing",
  async () => {
    const jobsListing = await getJobsListing();
    return jobsListing;
  }
);

const jobsListingSlice = createSlice({
  name: "jobsListing",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobsListing.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchJobsListing.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jobsListing = action.payload;
      })
      .addCase(fetchJobsListing.rejected, (state, action) => {
        state.isLoading = false;
        state.jobsListing = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default jobsListingSlice.reducer;
