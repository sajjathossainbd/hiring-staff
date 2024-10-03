import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRecruiterDetails } from "./recruiterDetailsAPI";

const initialState = {
  recruiterDetails: {},
  isLoading: false,
  isError: false,
  error: "",
};

// async thunk
export const fetchRecruiterDetails = createAsyncThunk(
  "recruiterDetails/fetchRecruiterDetails",
  async (id) => {
    const recruiterDetails = await getRecruiterDetails(id);
    return recruiterDetails;
  }
);

const RecruiterDetailsSlice = createSlice({
  name: "recruiterDetails",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecruiterDetails.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchRecruiterDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.recruiterDetails = action.payload;
      })
      .addCase(fetchRecruiterDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.recruiterDetails = {};
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default RecruiterDetailsSlice.reducer;
