import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/homepage/homepage/Homepage";
import Admission from "../pages/admission/Admission";
import MyCollege from "../pages/mycollege/MyCollege";
import Main from "../pages/main/Main";
import ErrorPage from "../pages/error/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
        {
            path: '/',
            element: <Homepage/>,
        },
        {
            path: '/admission',
            element: <Admission/>,
        },
        {
            path: 'my_college',
            element: <MyCollege/>
        },
        {
            path:"*",
            element:<ErrorPage/>
        }
    ],
  },
]);

export default router;