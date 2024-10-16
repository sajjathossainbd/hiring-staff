import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRecruitersListing } from "./recruitersListingAPI";

const initialState = {
  recruitersListing: {
    data: [],
    totalPages: 0,
    currentPage: 1,
    totalRecruiters: 0,
  },
  isLoading: false,
  isError: false,
  error: "",
};

// Async thunk
export const fetchRecruitersListing = createAsyncThunk(
  "recruitersListing/fetchRecruitersListing",
  async (filters) => {
    const response = await getRecruitersListing(filters);
    return response;
  }
);

const recruitersListingSlice = createSlice({
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
        state.recruitersListing.data = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default recruitersListingSlice.reducer;
