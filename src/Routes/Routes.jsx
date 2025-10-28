import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../Pages/JobApply/JobApply";
import MyApplication from "../Pages/MyApplication/MyApplication";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/jobs/:_id",
        element: <JobDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/jobs/${params._id}`),
      },
      {
        path: "/jobApply/:id",
        element: (
          <PrivateRoute>
            <JobApply />
          </PrivateRoute>
        ),
      },
      {
        path: "/application",
        element: <MyApplication />,
      },
    ],
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/login",
    Component: Login,
  },
]);
