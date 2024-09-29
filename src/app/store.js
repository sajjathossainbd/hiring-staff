import { configureStore } from "@reduxjs/toolkit";
import jobsListingReducer from "../features/jobs/jobsListing/jobsListingSlice";
import jobDetailsReducer from "../features/jobs/jobsDetails/jobDetailsSlice";

const store = configureStore({
  reducer: {
    jobsListing: jobsListingReducer,
    jobDetails: jobDetailsReducer,
  },
});

export default store;
