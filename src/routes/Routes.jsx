import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/Error/ErrorPage";
import Home from "../pages/home/Home";
import AboutUs from "../pages/aboutUs/AboutUs";
import ContactUs from "../pages/contactUs/ContactUs";
import Pricing from "../pages/Pricing/Pricing";
import JobsListing from "../pages/jobs/JobsListing";
import JobDetails from "../pages/jobs/JobDetails";
import RecruiterDetails from "../pages/recruiters/RecruiterDetails";
import RecruitersListing from "../pages/recruiters/RecruitersListing";
import CandidatesListing from "../pages/candidates/CandidatesListing";
import CandidateDetails from "../pages/candidates/CandidateDetails";
import CandidateProfile from "../pages/candidates/CandidateProfile";
import BlogsPage from "../pages/blogs/BlogsPage";
import BlogDetails from "../pages/blogs/BlogDetails";
import Register from "../pages/authentication/Register";
import SignIn from "../pages/authentication/SignIn";
import ResetPassword from "../pages/authentication/ResetPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/jobs-listing",
        element: <JobsListing />,
      },
      {
        path: "/job-details/:id",
        element: <JobDetails />,
      },
      {
        path: "/recruiters-listing",
        element: <RecruitersListing />,
      },
      {
        path: "/recruiter-details",
        element: <RecruiterDetails />,
      },
      {
        path: "/candidates-listing",
        element: <CandidatesListing />,
      },
      {
        path: "/candidate-details",
        element: <CandidateDetails />,
      },
      {
        path: "/candidate-profile",
        element: <CandidateProfile />,
      },
      {
        path: "/blogs",
        element: <BlogsPage />,
      },
      {
        path: "/blog-details",
        element: <BlogDetails />,
      },

      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/reset-password",
        element: <ResetPassword />,
      },
    ],
  },
]);

export default router;
