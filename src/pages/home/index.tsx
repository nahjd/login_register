import { useEffect, useState } from "react";
import Login from "../login";
import { UserStateTy, getAllProducts } from "./../../redux/slice/userSlice";

import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Navbar from "./../navbar/sidenav.tsx";

interface ProdElem {
  name: string;
}

const Home = () => {
  const [data, setData] = useState([]);
  const isLogin: UserStateTy = useSelector(
    (state: UserStateTy) => state.user.isLogin
  );
  const products: UserStateTy = useSelector(
    (state: UserStateTy) => state.user.products
  );

  console.log(products);
  const dispatch = useDispatch();

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
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Home;
