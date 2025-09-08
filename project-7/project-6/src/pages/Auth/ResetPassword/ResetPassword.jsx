import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from 'react-router-dom';
import * as Yup from "yup";

const validationSchema = Yup.object({
  password: Yup.string()
    .required("Password is required"),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
});

const ResetPassword = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Formik
        initialValues={{ password: "", repeatPassword: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Password reset:", values);
          // You can handle API call here
        }}
      >
        {({ isValid, dirty }) => (
          <div className="shadow-2xl w-[30rem] p-6 bg-white rounded-xl">
            <Form>
              <h1 className="text-2xl font-semibold mb-2">Reset Password</h1>

              <p className="mb-4">
                Enter your new password.
              </p>

              {/* New Password */}
              <div className="flex flex-col mb-3">
                <label className="text-[#171717] font-semibold">New Password:</label>
                <Field
                  name="password"
                  type="password"
                  className="border-2 border-gray-300 rounded-lg p-2"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Repeat Password */}
              <div className="flex flex-col mb-3">
                <label className="text-[#171717] font-semibold">Repeat New Password:</label>
                <Field
                  name="repeatPassword"
                  type="password"
                  className="border-2 border-gray-300 rounded-lg p-2"
                />
                <ErrorMessage
                  name="repeatPassword"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Submit button */}
              <Link to={"/ResetPassDone"}>
                <button
                  type="submit"
                  className={`mt-4 rounded-lg px-4 py-2 transition ${
                    isValid && dirty
                      ? "bg-gray-600 text-white hover:bg-gray-800"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                  disabled={!(isValid && dirty)}
                >
                  Reset Password
                </button>
              </Link>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default ResetPassword;
