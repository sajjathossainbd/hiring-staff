import { configureStore } from "@reduxjs/toolkit";
import jobsListingReducer from "../features/jobs/jobsListing/jobsListingSlice";
import jobDetailsReducer from "../features/jobs/jobsDetails/jobDetailsSlice";
import similarReducer from "../features/jobs/similarJobs/similarJobsSlice";
import jobsFilterReducer from "../features/jobs/jobsFilter/jobsFilterSlice";
import recruiterDetailsReducer from "../features/recruiters/recruiterDetails/recruiterDetailsSlice";
import recruitersListingReducer from "../features/recruiters/recruitersListing/recruitersListingSlice";

const store = configureStore({
  reducer: {
    // Jobs
    jobsListing: jobsListingReducer,
    jobDetails: jobDetailsReducer,
    similarJobs: similarReducer,
    jobsFilter: jobsFilterReducer,

    // Recruiters
    recruitersListing: recruitersListingReducer,
    recruiterDetails: recruiterDetailsReducer,
  },
});

export default store;
