import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBlogsListing } from "./blogsListingAPI";

const initialState = {
  blogsListing: [],
  isLoading: false,
  isError: false,
  error: "",
};

// async thunk
export const fetchBlogsListing = createAsyncThunk(
  "blogsListing/fetchBlogsListing",
  async ({ page, limit, query }) => {
    const blogsListing = await getBlogsListing(page, limit, query);
    return blogsListing;
  }
);

const BlogsListingSlice = createSlice({
  name: "blogsListing",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogsListing.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchBlogsListing.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blogsListing = action.payload;
      })
      .addCase(fetchBlogsListing.rejected, (state, action) => {
        state.isLoading = false;
        state.blogsListing = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default BlogsListingSlice.reducer;
