import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBlogDetails } from "./blogDetailsAPI";

const initialState = {
  blogDetails: {},
  isLoading: false,
  isError: false,
  error: "",
};

// async thunk
export const fetchBlogDetails = createAsyncThunk(
  "blogDetails/fetchBlogDetails",
  async (id) => {
    const blogDetails = await getBlogDetails(id);
    return blogDetails;
  }
);

const BlogDetailsSlice = createSlice({
  name: "blogDetails",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogDetails.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchBlogDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blogDetails = action.payload;
      })
      .addCase(fetchBlogDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.blogDetails = {};
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default BlogDetailsSlice.reducer;
