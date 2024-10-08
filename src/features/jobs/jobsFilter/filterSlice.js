import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  JobTitle: "",
  AllCategory: null,
  Location: null,
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setJobTitle: (state, action) => {
      state.JobTitle = action.payload;
    },
    setCategory: (state, action) => {
      state.AllCategory = action.payload;
    },
    setLocation: (state, action) => {
      state.Location = action.payload;
    },
  },
});

export const { setJobTitle, setCategory, setLocation } = filterSlice.actions;
export default filterSlice.reducer;
