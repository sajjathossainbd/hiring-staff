import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRecruiterOpenJobs } from "./OpenJobsAPI";

const initialState = {
  recruiterOpenJobs: [],
  isLoading: false,
  isError: false,
  error: "",
};

// Async thunk to fetch recruiter open jobs
export const fetchRecruiterOpenJobs = createAsyncThunk(
  "recruiterOpenJobs/fetchRecruiterOpenJobs",
  async (id) => {
    const recruiterOpenJobs = await getRecruiterOpenJobs(id);
    return recruiterOpenJobs;
  }
);

const OpenJobsSlice = createSlice({
  name: "recruiterOpenJobs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecruiterOpenJobs.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchRecruiterOpenJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.recruiterOpenJobs = action.payload; // Populate with fetched jobs
      })
      .addCase(fetchRecruiterOpenJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.recruiterOpenJobs = []; // Reset to empty array on error
        state.isError = true;
        state.error = action.error?.message || "Failed to fetch open jobs";
      });
  },
});

export default OpenJobsSlice.reducer;
