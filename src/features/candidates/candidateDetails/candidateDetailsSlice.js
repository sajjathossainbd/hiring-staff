import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCandidateDetails } from "./candidateDetailsAPI";

const initialState = {
  candidateDetails: {},
  isLoading: false,
  isError: false,
  error: "",
};

// async thunk
export const fetchCandidateDetails = createAsyncThunk(
  "candidateDetails/fetchCandidateDetails",
  async (id) => {
    const candidateDetails = await getCandidateDetails(id);
    return candidateDetails;
  }
);

const CandidateDetailsSlice = createSlice({
  name: "candidateDetails",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCandidateDetails.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchCandidateDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.candidateDetails = action.payload;
      })
      .addCase(fetchCandidateDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.candidateDetails = {};
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default CandidateDetailsSlice.reducer;
