import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getJobDetails } from "./JobDetailsAPI";

const initialState = {
  jobDetails: {},
  isLoading: false,
  isError: false,
  error: "",
};

// async thunk
export const fetchJobDetails = createAsyncThunk(
  "jobDetails/fetchJobDetails",
  async (id) => {
    const jobDetails = await getJobDetails(id);
    return jobDetails;
  }
);

const jobDetailsSlice = createSlice({
  name: "jobDetails",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobDetails.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchJobDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jobDetails = action.payload;
      })
      .addCase(fetchJobDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.jobDetails = {};
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default jobDetailsSlice.reducer;
