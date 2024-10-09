import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCandidatesListing } from "./candidatesListingAPI";

const initialState = {
  candidatesListing: [],
  isLoading: false,
  isError: false,
  error: "",
  totalPages: 0,
  currentPage: 1,
};

// async thunk
export const fetchCandidatesListing = createAsyncThunk(
  "candidatesListing/fetchCandidatesListing",
  async (filters) => {
    const candidatesListing = await getCandidatesListing(filters);
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
        state.totalPages = action.payload.totalPages;
        state.currentPage = action.payload.currentPage;
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
