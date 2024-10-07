import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchRecruitersListing = createAsyncThunk(
  "recruiters/fetchListing",
  async () => {
    const response = await fetch(
      `http://localhost:5000/recruiters`
    );
    const data = await response.json();
    return data.recruiters; // Assuming response structure
  }
);

const recruitersListingSlice = createSlice({
  name: "recruitersListing",
  initialState: {
    recruitersListing: [],
    isLoading: false,
    isError: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecruitersListing.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchRecruitersListing.fulfilled, (state, action) => {
        state.isLoading = false;
        state.recruitersListing = action.payload;
      })
      .addCase(fetchRecruitersListing.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default recruitersListingSlice.reducer;
