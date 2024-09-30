import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: [],
  search: "",
};

const jobsFilterSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    categorySelected: (state, action) => {
      state.category.push(action.payload);
    },
    categoryRemoved: (state, action) => {
      const indexToRemove = state.category.indexOf(action.payload);
      if (indexToRemove !== -1) {
        state.category.splice(indexToRemove, 1);
      }
    },
    searched: (state, action) => {
      state.search = action.payload;
    },
  },
});

export default jobsFilterSlice.reducer;
export const { categorySelected, categoryRemoved, searched } =
  jobsFilterSlice.actions;
