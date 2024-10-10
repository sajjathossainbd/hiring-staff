import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRecruitersListing } from "./recruitersListingAPI";

// Define the initial state
const initialState = {
  recruitersListing: [],
  isLoading: false,
  isError: false,
  error: "",
  totalPages: 0,
  currentPage: 1,
};

// Async thunk to fetch recruiters with parameters
export const fetchRecruitersListing = createAsyncThunk(
  "recruitersListing/fetchRecruitersListing",
  async (filters) => {
    const recruitersListing = await getRecruitersListing(filters);
    return recruitersListing;
  }
);

// Create the slice
const RecruitersListingSlice = createSlice({
  name: "recruitersListing",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecruitersListing.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchRecruitersListing.fulfilled, (state, action) => {
        state.isLoading = false;
        state.recruitersListing = action.payload;
      })
      .addCase(fetchRecruitersListing.rejected, (state, action) => {
        state.isLoading = false;
        state.recruitersListing = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

// Export the reducer
export default RecruitersListingSlice.reducer;
