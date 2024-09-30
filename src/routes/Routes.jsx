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
import Dashboard from "../layout/Dashboard";
import MyProfile from "../pages/dashboard/MyProfile";
import MyResume from "../pages/dashboard/forCandidates/MyResume";
import AppliedJobs from "../pages/dashboard/forCandidates/AppliedJobs";
import ShortlistedJobs from "../pages/dashboard/forCandidates/ShortlistedJobs";
import CompanyProfile from "../pages/dashboard/forRecruiter/CompanyProfile";
import PostJob from "../pages/dashboard/forRecruiter/PostJob";
import ManageJob from "../pages/dashboard/forRecruiter/ManageJob";
import AllApplicants from "../pages/dashboard/forRecruiter/AllApplicants";
import Shortlist from "../pages/dashboard/forRecruiter/Shortlist";
import DashboardMain from "../pages/dashboard/DashboardMain";
import ManageUsers from "../pages/dashboard/forAdmin/ManageUsers";
import AdminAnalytics from "../pages/dashboard/forAdmin/AdminAnalytics";
import PrivateRoute from "./PrivateRoute";
import PaymentForm from "../pages/paymentForm/PaymentForm";
import AllPaymentHistory from "../pages/dashboard/forAdmin/AllPaymentHistory";

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
        path: "/paymentForm",
        element: <PrivateRoute>
          <PaymentForm />
        </PrivateRoute>,
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
        path: "/candidate-details/:id",
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
        path: "/blog-details/:id",
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
  {
    path: "/dashboard",
    element: <PrivateRoute>
      <Dashboard />
    </PrivateRoute>,
    children: [

      // For all
      {
        path: "dashboard-main",
        element: <DashboardMain />
      },
      {
        path: "my-profile",
        element: <MyProfile />
      },

      // For admin
      {
        path: "admin-analytics",
        element: <AdminAnalytics />
      },
      {
        path: "manage-users",
        element: <ManageUsers />
      },
      {
        path: "all-payment-history",
        element: <AllPaymentHistory />
      },

      // For Candidate
      {
        path: "my-resume",
        element: <MyResume />
      },
      {
        path: "applied-jobs",
        element: <AppliedJobs />
      },
      {
        path: "shortlisted-jobs",
        element: <ShortlistedJobs />
      },

      // For Recruiter
      {
        path: "company-profile",
        element: <CompanyProfile />
      },
      {
        path: "post-job",
        element: <PostJob />
      },
      {
        path: "manage-jobs",
        element: <ManageJob />
      },
      {
        path: "all-applicants",
        element: <AllApplicants />
      },
      {
        path: "shortlist",
        element: <Shortlist />
      },

    ]
  }
]);

export default router;
