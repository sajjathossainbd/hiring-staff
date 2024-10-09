import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getJobLocations } from "./jobLocationAPI";

const initialState = {
  locations: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchJobLocations = createAsyncThunk(
  "jobLocations/fetchJobLocations",
  async (_, { rejectWithValue }) => {
    try {
      const locations = await getJobLocations();
      return locations;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Create slice
const jobLocationsSlice = createSlice({
  name: "jobLocations",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobLocations.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchJobLocations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.locations = ["All Location", ...action.payload];
      })
      .addCase(fetchJobLocations.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload || "Failed to fetch categories.";
        state.locations = [];
      });
  },
});

export default jobLocationsSlice.reducer;
