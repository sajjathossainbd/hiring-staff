import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getJobsListing } from "./jobsListingAPI";

// Initial state
const initialState = {
  jobsListing: [],
  isLoading: false,
  isError: false,
  error: "",
};

// Async thunk to fetch job listings
export const fetchJobsListing = createAsyncThunk(
  "jobsListing/fetchJobsListing",
  async (search, { rejectWithValue }) => {
    try {
      const jobsListing = await getJobsListing(search);
      return jobsListing;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Create the slice
const jobsListingSlice = createSlice({
  name: "jobsListing",
  initialState,
  extraReducers: (builder) => {
    builder
      // Handle the pending state (loading)
      .addCase(fetchJobsListing.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      // Handle the fulfilled state (data successfully fetched)
      .addCase(fetchJobsListing.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jobsListing = action.payload;
      })
      // Handle the rejected state (error occurred)
      .addCase(fetchJobsListing.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload || "Failed to fetch jobs.";
        state.jobsListing = [];
      });
  },
});

// Export the reducer to be used in the store
export default jobsListingSlice.reducer;
