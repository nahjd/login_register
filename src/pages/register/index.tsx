import React from "react";
import { Formik } from "formik";
import "./register.scss";

const Basic = () => (
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
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Enter the email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <br />
              {errors.email && touched.email && errors.email}
              <input
                type="password"
                name="password"
                placeholder="Enter the password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />{" "}
              <br />
              {errors.password && touched.password && errors.password} <br />
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  </div>
);

export default Basic;
