import { configureStore } from "@reduxjs/toolkit";
import jobsListingReducer from "../features/jobs/jobsListing/jobsListingSlice";
import jobDetailsReducer from "../features/jobs/jobsDetails/jobDetailsSlice";
import similarReducer from "../features/jobs/similarJobs/similarJobsSlice";
import jobsFilterReducer from "../features/jobs/jobsFilter/jobsFilterSlice";
import allRecruitersReducer from "../features/recruiters/allRecruiters/allRecruitersSlice";

const store = configureStore({
  reducer: {
    jobsListing: jobsListingReducer,
    jobDetails: jobDetailsReducer,
    similarJobs: similarReducer,
    jobsFilter: jobsFilterReducer,
    recruiters: allRecruitersReducer,
  },
});

export default store;
