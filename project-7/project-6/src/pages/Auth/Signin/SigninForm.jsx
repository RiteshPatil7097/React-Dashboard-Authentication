import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";

const SigninForm = ({
  initialValues,
  handleSubmit,
  validationSchema,
  isLoading,
}) => {
  return (
    <div className="w-[408px] p-6 mx-auto h-[70vh] bg-white text-gray-600 rounded-lg shadow-xl flex items-center mt-20 overflow-auto">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col gap-4 w-full">
          <h1 className="font-semibold text-2xl text-[#171717]">
            Welcome to Crypto App
          </h1>
          <p className="text-[#797E82] p-1">
            Enter your credentials to access the account.
          </p>

          {/* Email Field */}
          <div className="flex flex-col">
            <label className="text-[#171717]">Email:</label>
            <Field
              name="email"
              type="email"
              placeholder="abc@gmail.com"
              className="border-2 border-gray-300 rounded-lg p-2"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          {/* Password Field */}
          <div className="flex flex-col">
            <label className="text-[#171717]">Password:</label>
            <Field
              name="password"
              type="password"
              placeholder="••••••••"
              className="border-2 border-gray-300 rounded-lg p-2"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          {/* Remember me & Forgot password */}
          <div className="flex flex-row gap-2 items-center">
            <div>
              <Field type="checkbox" name="remember" />
              <label className="ml-1 text-sm">Remember me</label>
            </div>
            <div className="ml-auto">
              <Link
                to="/forgot-password"
                className="text-[#5F00D9] hover:text-purple-400 text-sm"
              >
                Forgot Password?
              </Link>
            </div>
          </div>

          {/* Create Account Button */}
          <Link to="/signup">
            <button
              type="button"
              className="bg-gray-200 w-full rounded-lg p-2 mt-3 text-center hover:bg-gray-300"
            >
              Create New Account
            </button>
          </Link>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`${
              isLoading ? "bg-gray-300 cursor-not-allowed" : "bg-purple-600"
            } text-white rounded-lg p-2 mt-2 text-center hover:bg-purple-700`}
          >
            {isLoading ? "Logging in..." : "Log In"}
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SigninForm;
