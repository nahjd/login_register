import { useEffect, useState } from "react";
import Login from "../login";
import { UserStateTy, getAllProducts } from "./../../redux/slice/userSlice";

import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

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
    axios("http://localhost:5000/products", {
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
      Home
      {isLogin ? (
        <>
          <ul>
            {data &&
              data.map((elem: ProdElem, i: number) => {
                return <li key={i}>{elem.name}</li>;
              })}
          </ul>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Home;
