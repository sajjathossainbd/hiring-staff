import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRecruitersListing } from "./recruitersListingAPI";

const initialState = {
  recruitersListing: [],
  isLoading: false,
  isError: false,
  error: "",
};

// async thunk
export const fetchRecruitersListing = createAsyncThunk(
  "recruitersListing/fetchRecruitersListing",
  async () => {
    const recruitersListing = await getRecruitersListing();
    return recruitersListing;
  }
);

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

export default RecruitersListingSlice.reducer;
