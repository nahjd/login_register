import Home from "./../pages/home/index";
import Login from "../pages/login/index";
import Register from "./../pages/register/index";
import About from "./../pages/about/profile";
import Addfriend from "./../pages/addfriend/addfriend";
import Direct from "../pages/direct/direct";
import Notifications from "../pages/Notifacitons/notifications";
import Creat from "../pages/creat/Creat";
// import Search from "../pages/search/Search";

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
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/addfriend",
    element: <Addfriend />,
  },
  {
    path: "/direct",
    element: <Direct />,
  },
  {
    path: "/notification",
    element: <Notifications />,
  },
  {
    path: "/creat",
    element: <Creat />,
  },
  // {
  //   path: "/search",
  //   element: <Search />,
  // },
];
