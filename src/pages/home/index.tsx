import { useEffect, useState } from "react";
import Login from "../login";
import { UserStateTy } from "./../../redux/slice/userSlice";

import { useSelector } from "react-redux";
import axios from "axios";
import Navbar from "./../navbar/sidenav.tsx";
import Middlenav from "../middlenav/middlenav.tsx";
import Homepost from "./../homepost/userpost.tsx";

interface ProdElem {
  name: string;
}

const Home = () => {
  const [data, setData] = useState([]);
  const isLogin: UserStateTy = useSelector(
    (state: UserStateTy) => state.user.isLogin
  );

  useEffect(() => {
    // dispatch(getAllProducts());
    const token = localStorage.getItem("token");
    console.log(token);
    axios("http://localhost:5000/users/", {
      headers: {
        Authorization: `barear ${token}`,
      },
    }).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  return (
    <div>
      {isLogin ? (
        <>
          <Navbar />
          <Middlenav />
          <Homepost />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Home;
