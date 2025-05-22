import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Home from "../Components/Home/Home";
import LogIn from "../Pages/Froms/LogIn";
import SingUp from "../Pages/Froms/SingUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/singUp",
        element: <SingUp></SingUp>,
      },
    ],
  },
]);

export default router;
