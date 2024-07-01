import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Signup from "../components/Signup.jsx";
import UpdateProfile from "../pages/dashboard/UpdateProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      
      {
        path: "/update-profile",
        element: <UpdateProfile/>
      }
    ],
  },
  {
    path: "/signup",
    element: <Signup/>
  }
]);

export default router;