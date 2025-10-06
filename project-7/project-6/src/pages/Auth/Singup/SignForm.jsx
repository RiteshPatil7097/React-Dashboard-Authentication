import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";

const SignForm = ({ initialValues, handleSubmit, validationSchema, isLoading }) => {
  return (
    <div className="w-[420px] p-6 mx-auto mt-20 bg-white text-gray-700 rounded-lg shadow-2xl flex items-center justify-center">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col gap-4 w-full">
          <h1 className="font-semibold text-2xl text-[#171717] text-center">
            Welcome to Crypto App
          </h1>
          <p className="text-[#797E82] text-center">
            Create a free account by filling in the data below.
          </p>

          {/* First & Last Name */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col w-full md:w-1/2">
              <label className="text-[#171717]">First Name:</label>
              <Field
                name="firstName"
                type="text"
                className="border-2 border-gray-300 rounded-lg p-2"
              />
              <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm" />
            </div>
            <div className="flex flex-col w-full md:w-1/2">
              <label className="text-[#171717]">Surname:</label>
              <Field
                name="lastName"
                type="text"
                className="border-2 border-gray-300 rounded-lg p-2"
              />
              <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm" />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-[#171717]">Email:</label>
            <Field
              name="email"
              type="email"
              placeholder="abc@gmail.com"
              className="border-2 border-gray-300 rounded-lg p-2"
            />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="text-[#171717]">Password:</label>
            <Field
              name="password"
              type="password"
              className="border-2 border-gray-300 rounded-lg p-2"
            />
            <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
          </div>

          {/* Repeat Password */}
          <div className="flex flex-col">
            <label className="text-[#171717]">Repeat Password:</label>
            <Field
              name="repeatPassword"
              type="password"
              className="border-2 border-gray-300 rounded-lg p-2"
            />
            <ErrorMessage name="repeatPassword" component="div" className="text-red-500 text-sm" />
          </div>

          {/* Terms & Conditions */}
          <div className="flex flex-row gap-2 items-center">
            <Field type="checkbox" name="terms" />
            <label>I agree with</label>
            <p className="text-[#5F00D9] cursor-pointer hover:text-purple-600">
              Terms and Conditions
            </p>
          </div>
          <ErrorMessage name="terms" component="div" className="text-red-500 text-sm" />

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`bg-gray-300 rounded-lg p-2 text-center cursor-pointer hover:bg-gray-500 ${
              isLoading && "opacity-60 cursor-not-allowed"
            }`}
          >
            {isLoading ? "Creating Account..." : "Create Account"}
          </button>

          {/* Already have an account */}
          <div className="flex flex-row gap-1 justify-center items-center">
            <p>Already have an account?</p>
            <Link to="/Signin">
              <p className="text-[#5F00D9] cursor-pointer hover:text-purple-600">
                Log in
              </p>
            </Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default SignForm;
