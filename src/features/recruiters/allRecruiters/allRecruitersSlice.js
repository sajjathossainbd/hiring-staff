import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../../utils/axios";

// Async action to fetch recruiters
export const fetchAllRecruiters = createAsyncThunk(
  "recruiters/fetchAllRecruiters",
  async () => {
    const response = await axios.get("/recruiters");
    return response.data;
  }
);

// Initial state
const initialState = {
  recruiters: [],
  isLoading: false,
  isError: false,
  error: "",
};

// Slice for recruiters
const allRecruitersSlice = createSlice({
  name: "recruiters",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllRecruiters.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchAllRecruiters.fulfilled, (state, action) => {
        state.isLoading = false;
        state.recruiters = action.payload;
      })
      .addCase(fetchAllRecruiters.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default allRecruitersSlice.reducer;
