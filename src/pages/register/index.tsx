import * as React from "react";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  ErrorMessage,
} from "formik";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./register.scss";

interface MyFormValues {
  email: string;
  userName: string;
  password: string;
}

const Register = () => {
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
            <h2>Register</h2>
            <b>
              <p>Please login to continue</p>
            </b>
            <br />
            <Formik
              initialValues={{
                email: "",
                userName: "",
                password: "",
              }}
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
                let id = uuidv4();
                console.log({ ...values, id });
                let obj = {
                  ...values,
                  id,
                };
                axios.post("http://localhost:5000/users/", obj).then((res) => {
                  // console.log(res);

                  if (res.status === 201) {
                    alert("bu email artiq qeydiyyatdan kecib");
                  }
                  if (res.status === 200) {
                    alert("qeydiyyat ugurla tamamlandi");
                    navigate("/login");
                  }
                });
              }}
            >
              <Form>
                <label htmlFor="email">Email</label>
                <Field id="email" name="email" placeholder="Email " />
                <ErrorMessage name="email" component="div" />
                <br />
                <label htmlFor="userName">Username</label>
                <Field
                  style={{ marginRight: "31px" }}
                  id="userName"
                  name="userName"
                  placeholder="Username "
                />
                <br />
                <label htmlFor="password">Password</label>
                <Field
                  style={{ marginRight: "28px" }}
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
                <br />
                <button type="submit">Register</button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
