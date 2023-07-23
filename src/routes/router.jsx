import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/homepage/homepage/Homepage";
import Admission from "../pages/admission/Admission";
import MyCollege from "../pages/mycollege/MyCollege";
import Main from "../pages/main/Main";
import ErrorPage from "../pages/error/ErrorPage";
import Colleges from "../pages/colleges/Colleges";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import CollegeDetails from "../pages/collegedetails/CollegeDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/colleges",
        element: <Colleges />,
      },
      {
        path: "/admission",
        element: <Admission />,
      },
      {
        path: "my_college",
        element: <MyCollege />,
      },
      {
        path:'/:id/:name',
        element: <CollegeDetails/>
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
