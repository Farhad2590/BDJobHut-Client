import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import AllJobs from "../Pages/AllJobs/AllJobs";
import AppliedJobs from "../Pages/AppliedJobs/AppliedJobs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import PostJob from "../Pages/PostJob/PostJob";
import ManageJobs from "../Pages/ManageJobs/ManageJobs";
import CompanyProfile from "../Pages/CompanyProfile/CompanyProfile";
import ApplicationList from "../Pages/ApplicationList/ApplicationList";
import Signin from "../Pages/Signin/Signin";
import Signup from "../Pages/Signup/Signup";
// import App from "../SharedComponents/App/App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/all-jobs",
        element: <AllJobs></AllJobs>,
      },
      {
        path: "/applied-jobs",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/post-job",
        element: <PostJob></PostJob>,
      },
      {
        path: "/manage-jobs",
        element: <ManageJobs></ManageJobs>,
      },
      {
        path: "/company-profile",
        element: <CompanyProfile></CompanyProfile>,
      },
      {
        path: "/application-list",
        element: <ApplicationList></ApplicationList>,
      },
    ],
  },
    // { path: '/login', element: <App /> },
  { path: '/login', element: <Signin /> },
  { path: '/signup', element: <Signup /> },
]);
