import * as React from "react";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  ErrorMessage,
} from "formik";
import axios from "axios";
import { login, loginUser } from "./../../redux/slice/userSlice";

import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./../register/register.scss";

interface MyFormValues {
  email: string;
  // userName: string;
  password: string;
}

const Login = () => {
  const initialValues: MyFormValues = { email: "", password: "" };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="left">
          <img
            src="https://img.freepik.com/free-vector/flat-design-colorful-characters-welcoming_23-2148271988.jpg?w=1380&t=st=1703516674~exp=1703517274~hmac=82fc243eab5508c2e880645743d0de588745953f6c0eebf4bb376c5a2c0f74ad"
            alt=""
          />
        </div>
        <div className="right">
          <div className="loginn">
            <h2>Login</h2>
            <b>
              <p>Please login to continue</p>
            </b>
            <br />
            <Formik
              initialValues={initialValues}
              validate={(values) => {
                const errors: Partial<MyFormValues> = {};
                if (!values.email) {
                  errors.email = "Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                return errors;
              }}
              onSubmit={(values) => {
                localStorage.setItem("user", JSON.stringify(values));
                axios
                  .post("http://localhost:5000/users/", values)
                  .then((res) => {
                    console.log(res.data);

                    if (res.status == 200) {
                      localStorage.setItem("token", res.data);
                      dispatch(login(true));
                      dispatch(loginUser(values));
                      navigate("/");
                    }
                  });
              }}
            >
              <Form>
                <label htmlFor="email">Email</label>
                <Field id="email" name="email" placeholder="Email " />
                <ErrorMessage name="email" component="div" />
                <br />
                {/* <label htmlFor="userName">Username</label>
                <Field
                  style={{ marginRight: "31px" }}
                  id="userName"
                  name="userName"
                  placeholder="Username "
                />
                <br /> */}
                <label htmlFor="password">Password</label>
                <Field
                  style={{ marginRight: "28px" }}
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
                <br />
                <button type="submit">Login</button>
              </Form>
            </Formik>

            <p style={{ marginTop: "25px" }}>
              Don't have an account yet?{" "}
              <Link to="/register">
                {" "}
                <span
                  style={{
                    padding: "5px",
                    textAlign: "center",
                    color: "white",
                    fontSize: "19px",
                    backgroundColor: "#03045E",
                    borderRadius: "8px",
                    border: "none",
                  }}
                  className="sign-up"
                >
                  Sign up
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
