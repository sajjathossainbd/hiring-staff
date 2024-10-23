import { configureStore } from "@reduxjs/toolkit";
import jobsListingReducer from "../features/jobs/jobsListing/jobsListingSlice";
import jobDetailsReducer from "../features/jobs/jobsDetails/jobDetailsSlice";
import similarReducer from "../features/jobs/similarJobs/similarJobsSlice";
import jobsFilterReducer from "../features/jobs/jobsFilter/jobsFilterSlice";
import recruiterDetailsReducer from "../features/recruiters/recruiterDetails/recruiterDetailsSlice";
import recruitersListingReducer from "../features/recruiters/recruitersListing/recruitersListingSlice";
import candidatesListingReducer from "../features/candidates/candidatesListing/candidatesListingSlice";
import candidateDetailsReducer from "../features/candidates/candidateDetails/candidateDetailsSlice";
import blogsListingReducer from "../features/blogs/blogsListing/blogsListingSlice";
import blogDetailsReducer from "../features/blogs/blogDetails/blogDetailsSlice";
import filterReducer from "../features/jobs/jobsFilter/filterSlice";
import jobCategoriesReducer from "../features/jobs/filterCollection/categories/jobCategoriesSlice";
import jobLocationsReducer from "../features/jobs/filterCollection/location/jobLocationsSlice";
import fetchRecruiterOpenJobsReducer from "../features/recruiters/recruiterDetails/OpenJobsSlice";
const store = configureStore({
  reducer: {
    // Jobs
    jobsListing: jobsListingReducer,
    jobLocations: jobLocationsReducer,
    jobCategories: jobCategoriesReducer,
    jobDetails: jobDetailsReducer,
    similarJobs: similarReducer,
    jobsFilter: jobsFilterReducer,
    filters: filterReducer,
    // Recruiters
    recruitersListing: recruitersListingReducer,
    recruiterDetails: recruiterDetailsReducer,
    recruiterOpenJobs: fetchRecruiterOpenJobsReducer,
    // Candidates
    candidatesListing: candidatesListingReducer,
    candidateDetails: candidateDetailsReducer,

    // Blogs
    blogsListing: blogsListingReducer,
    blogDetails: blogDetailsReducer,
  },
});

export default store;
