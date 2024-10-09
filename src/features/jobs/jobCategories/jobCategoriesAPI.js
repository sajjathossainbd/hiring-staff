import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/axios";

export const fetchJobCategories = createAsyncThunk(
  "jobCategories/fetchJobCategories",
  async () => {
    const response = await axiosInstance.get("/jobs/categories");
    return response.data;
  }
);
