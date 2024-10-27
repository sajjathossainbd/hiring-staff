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
import RecruiterProfile from "../pages/dashboard/forRecruiter/RecruiterProfile";
import PostJob from "../pages/dashboard/forRecruiter/PostJob";
import ManageJob from "../pages/dashboard/forRecruiter/ManageJob";
import AllApplicants from "../pages/dashboard/forRecruiter/AllApplicants";
import Shortlist from "../pages/dashboard/forRecruiter/Shortlist";
import DashboardMain from "../pages/dashboard/DashboardMain";
import ManageUsers from "../pages/dashboard/forAdmin/ManageUsers";
import PrivateRoute from "./PrivateRoute";
import PaymentForm from "../pages/paymentForm/PaymentForm";
import AllPaymentHistory from "../pages/dashboard/forAdmin/AllPaymentHistory";
import MyPayments from "../pages/dashboard/MyPayments";
import ManageJobs from "../pages/dashboard/forAdmin/ManageJobs";
import SelectedJobs from "../pages/dashboard/forCandidates/SelectedJobs";
import ManageCandidates from "../pages/dashboard/forAdmin/ManageCandidates";
import ManageRecruiters from "../pages/dashboard/forAdmin/ManageRecruiters";
import ManageBlogs from "../pages/dashboard/forAdmin/ManageBlogs";
import PrivacyAndPolicy from "../pages/privacyPolicy/PrivacyAndPolicy";
import TermsAndConditions from "../pages/termsandcondition/TermsAndConditions";
import AiAssistant from "../pages/dashboard/AiAssistant";
import CreateBlogs from "../pages/dashboard/forAdmin/CreateBlogs";

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
        path: "/privacy",
        element: <PrivacyAndPolicy />,
      },
      {
        path: "/termsandcondition",
        element: <TermsAndConditions />,
      },
      {
        path: "/paymentForm",
        element: (
          <PrivateRoute>
            <PaymentForm />
          </PrivateRoute>
        ),
      },
      {
        path: "/jobs-listing/:page",
        element: <JobsListing />,
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
        path: "/recruiters-listing/:page",
        element: <RecruitersListing />,
      },
      {
        path: "/recruiter-details/:id",
        element: <RecruiterDetails />,
      },
      {
        path: "/candidates-listing",
        element: <CandidatesListing />,
      },
      {
        path: "/candidates-listing/:page",
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
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      // For all
      {
        path: "dashboard-main",
        element: <DashboardMain />,
      },
      {
        path: "my-profile",
        element: <MyProfile />,
      },
      {
        path: "my-payments",
        element: <MyPayments />,
      },
      {
        path: "ai-assistant",
        element: <AiAssistant />,
      },

      // For admin
      {
        path: "manage-users",
        element: <ManageUsers />,
      },
      {
        path: "manage-users/:page",
        element: <ManageUsers />,
      },
      {
        path: "manage-candidates",
        element: <ManageCandidates />,
      },
      {
        path: "manage-candidates/:page",
        element: <ManageCandidates />,
      },
      {
        path: "manage-recruiters",
        element: <ManageRecruiters />,
      },
      {
        path: "manage-recruiters/:page",
        element: <ManageRecruiters />,
      },
      {
        path: "manage-all-jobs",
        element: <ManageJobs />,
      },
      {
        path: "manage-all-jobs/:page",
        element: <ManageJobs />,
      },
      {
        path: "manage-all-blogs",
        element: <ManageBlogs />,
      },
      {
        path: "manage-all-blogs/:page",
        element: <ManageBlogs />,

      },
      {
        path: "manage-all-blogs/:page/create-blogs",
        element: <CreateBlogs />,
      },
      {
        path: "all-payment-history",
        element: <AllPaymentHistory />,
      },
      {
        path: "all-payment-history/:page",
        element: <AllPaymentHistory />,
      },
      

      // For Candidate
      {
        path: "my-resume",
        element: <MyResume />,
      },
      {
        path: "applied-jobs",
        element: <AppliedJobs />,
      },
      {
        path: "applied-jobs/:page",
        element: <AppliedJobs />,
      },
      {
        path: "shortlisted-jobs",
        element: <ShortlistedJobs />,
      },
      {
        path: "shortlisted-jobs/:page",
        element: <ShortlistedJobs />,
      },
      {
        path: "selected-jobs",
        element: <SelectedJobs />,
      },
      {
        path: "selected-jobs/:page",
        element: <SelectedJobs />,
      },

      // For Recruiter
      {
        path: "recruiter-profile",
        element: <RecruiterProfile />,
      },
      {
        path: "post-job",
        element: <PostJob />,
      },
      {
        path: "manage-jobs",
        element: <ManageJob />,
      },
      {
        path: "manage-jobs/:page",
        element: <ManageJob />,
      },
      {
        path: "all-applicants",
        element: <AllApplicants />,
      },
      {
        path: "shortlist",
        element: <Shortlist />,
      },
    ],
  },
]);

export default router;
