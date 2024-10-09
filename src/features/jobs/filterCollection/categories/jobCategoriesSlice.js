import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getJobCategories } from "./jobCategoriesAPI";

const initialState = {
  categories: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchJobCategories = createAsyncThunk(
  "jobCategories/fetchJobCategories",
  async (_, { rejectWithValue }) => {
    try {
      const categories = await getJobCategories();
      return categories;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Create slice
const jobCategoriesSlice = createSlice({
  name: "jobCategories",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobCategories.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchJobCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = ["All Category", ...action.payload];
      })
      .addCase(fetchJobCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload || "Failed to fetch categories.";
        state.categories = []; // Reset the categories on failure
      });
  },
});

export default jobCategoriesSlice.reducer;
