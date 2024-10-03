import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCandidatesListing } from "./candidatesListingAPI";

const initialState = {
  candidatesListing: [],
  isLoading: false,
  isError: false,
  error: "",
};

// async thunk
export const fetchCandidatesListing = createAsyncThunk(
  "candidatesListing/fetchCandidatesListing",
  async () => {
    const candidatesListing = await getCandidatesListing();
    return candidatesListing;
  }
);

const CandidatesListingSlice = createSlice({
  name: "candidatesListing",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCandidatesListing.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchCandidatesListing.fulfilled, (state, action) => {
        state.isLoading = false;
        state.candidatesListing = action.payload;
      })
      .addCase(fetchCandidatesListing.rejected, (state, action) => {
        state.isLoading = false;
        state.candidatesListing = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default CandidatesListingSlice.reducer;
