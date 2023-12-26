import Home from "./../pages/home/index";
import Login from "../pages/login/index";
import Register from "./../pages/register/index";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
];