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
import MyResume from "../pages/dashboard/forCandidates/MyResume";
import AppliedJobs from "../pages/dashboard/forCandidates/AppliedJobs";
import ShortlistedJobs from "../pages/dashboard/forCandidates/ShortlistedJobs";
import RecruiterProfile from "../pages/dashboard/forRecruiter/RecruiterProfile";
import PostJob from "../pages/dashboard/forRecruiter/PostJob";
import ManageJob from "../pages/dashboard/forRecruiter/ManageJob";
import AllApplicants from "../pages/dashboard/forRecruiter/AllApplicants";
import Shortlist from "../pages/dashboard/forRecruiter/Shortlist";
import DashboardMain from "../pages/dashboard/DashboardMain";
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
import CandidateRoute from "./CandidateRoute";
import RecruiterRoute from "./RecruiterRoute";
import JobAppliers from "../pages/dashboard/forRecruiter/JobAppliers";
import ShortListedCandidates from "../pages/dashboard/forRecruiter/ShortListedCandidates";
import InterviewCandidets from "../pages/dashboard/forRecruiter/InterviewCandidets";
import SelectedCandidates from "../pages/dashboard/forRecruiter/SelectedCandidates";
import InterviewCandidetsList from "../pages/dashboard/forRecruiter/InterviewCandidetsList";
import SelectedCandidatesList from "../pages/dashboard/forRecruiter/SelectedCandidatesList";
import CandidatesProfile from "../pages/dashboard/forCandidates/CandidatesProfile";

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
        element: (
          <PrivateRoute>
            <JobDetails />
          </PrivateRoute>
        ),
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
        element: (
          <PrivateRoute>
            <RecruiterDetails />
          </PrivateRoute>
        ),
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
        element: (
          <PrivateRoute>
            <CandidateDetails />
          </PrivateRoute>
        ),
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
        element: (
          <PrivateRoute>
            <BlogDetails />
          </PrivateRoute>
        ),
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
        path: "my-payments",
        element: <MyPayments />,
      },
      {
        path: "ai-assistant",
        element: <AiAssistant />,
      },

      // For admin
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
        element: (
          <CandidateRoute>
            <MyResume />
          </CandidateRoute>
        ),
      },
      {
        path: "applied-jobs",
        element: (
          <CandidateRoute>
            <AppliedJobs />
          </CandidateRoute>
        ),
      },
      {
        path: "applied-jobs/:page",
        element: (
          <CandidateRoute>
            <AppliedJobs />
          </CandidateRoute>
        ),
      },
      {
        path: "shortlisted-jobs",
        element: (
          <CandidateRoute>
            <ShortlistedJobs />
          </CandidateRoute>
        ),
      },
      {
        path: "shortlisted-jobs/:page",
        element: (
          <CandidateRoute>
            <ShortlistedJobs />
          </CandidateRoute>
        ),
      },
      {
        path: "selected-jobs",
        element: (
          <CandidateRoute>
            <SelectedJobs />
          </CandidateRoute>
        ),
      },
      {
        path: "selected-jobs/:page",
        element: (
          <CandidateRoute>
            <SelectedJobs />
          </CandidateRoute>
        ),
      },
      {
        path: "my-profile",
        element: (
          <CandidateRoute>
            <CandidatesProfile />
          </CandidateRoute>
        ),
      },

      // For Recruiter
      {
        path: "recruiter-profile",
        element: (
          <RecruiterRoute>
            <RecruiterProfile />
          </RecruiterRoute>
        ),
      },
      {
        path: "post-job",
        element: (
          <RecruiterRoute>
            <PostJob />
          </RecruiterRoute>
        ),
      },
      {
        path: "manage-jobs",
        element: (
          <RecruiterRoute>
            <ManageJob />
          </RecruiterRoute>
        ),
      },
      {
        path: "job-appliers/:jobId",
        element: (
          <RecruiterRoute>
            <JobAppliers />,
          </RecruiterRoute>
        ),
      },
      {
        path: "shortlsit-candidates",
        element: <ShortListedCandidates />,
      },
      {
        path: "interview-candidates-list",
        element: <InterviewCandidetsList />,
      },
      {
        path: "selected-candidates-list",
        element: <SelectedCandidatesList />,
      },
      {
        path: "manage-jobs/:page",
        element: (
          <RecruiterRoute>
            <ManageJob />
          </RecruiterRoute>
        ),
      },
      {
        path: "interview-candidates",
        element: (
          <RecruiterRoute>
            <InterviewCandidets />
          </RecruiterRoute>
        ),
      },
      {
        path: "selected-candidates",
        element: (
          <RecruiterRoute>
            <SelectedCandidates />
          </RecruiterRoute>
        ),
      },
      {
        path: "applications/:jobId",
        element: (
          <RecruiterRoute>
            <AllApplicants />
          </RecruiterRoute>
        ),
      },
      {
        path: "shortlist",
        element: (
          <RecruiterRoute>
            <Shortlist />
          </RecruiterRoute>
        ),
      },
    ],
  },
]);

export default router;
