import Home from "./../src/pages/home/index";
import Login from "./../src/pages/login/intex";
import Register from "./../src/pages/register/index";

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
