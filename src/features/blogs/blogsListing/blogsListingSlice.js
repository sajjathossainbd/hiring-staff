import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBlogsListing } from "./blogsListingAPI";

const initialState = {
  blogsListing: [],
  currentPage: 1,
  totalPages: 1,
  isLoading: false,
  isError: false,
  error: "",
};

// async thunk
export const fetchBlogsListing = createAsyncThunk(
  "blogsListing/fetchBlogsListing",
  async ({ page = 1, limit = 5, title = "", tags = "" }) => {
    const blogsListing = await getBlogsListing(page, limit, title, tags);
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
        state.blogsListing = action.payload.blogs;
        state.currentPage = action.payload.currentPage;
        state.totalPages = action.payload.totalPages;
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
