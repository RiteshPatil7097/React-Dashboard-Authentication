import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from 'react-router-dom';

const SigninForm = ({ initialValues, handleSubmit }) => {
  return (
    <div className="w-[408px] p-6 mx-auto h-[70vh] bg-white text-gray-600 rounded-lg shadow-xl flex items-center mt-30 overflow-auto">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        // validationSchema={validationSchema} // Optional
      >
        <Form className="flex flex-col gap-4 w-full">
          <h1 className="font-semibold text-2xl text-[#171717]">
            Welcome to Crypto App
          </h1>
          <p className="text-[#797E82] p-1">
           Enter your credentials to access the account.
          </p>

          <div className="flex flex-col">
            <label className='text-[#171717]'>Email:</label>
            <Field name="email" type="email" placeholder="abc@gmail.com" className="border-2 border-gray-300 rounded-lg p-2" />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="flex flex-col">
            <label className='text-[#171717]'>Password:</label>
            <Field name="password" type="password" className="border-2 border-gray-300 rounded-lg p-2" />
            <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="flex flex-row gap-2 items-center ">
            <div>
               <Field type="checkbox" name="terms" />
               <label>Remember me</label>
            </div>
            <div className="flex flex-row gap-1 justify-end items-end ml-24">
                 <p className="text-[#5F00D9] cursor-pointer hover:text-purple-400">Forgot Password?</p>
            </div>
          </div>
          <ErrorMessage name="terms" component="div" className="text-red-500 text-sm" />

          <Link to={"/Signup"}>
              <button type="submit" className="bg-gray-300 w-90 rounded-lg p-2 text-center cursor-pointer hover:bg-gray-500">
                Create New Account
              </button>
          </Link>
          <button type="submit" className="bg-gray-400 rounded-lg p-2 text-center cursor-pointer hover:bg-gray-500">
            Log In
          </button>


        </Form>
      </Formik>
    </div>
  );
};

export default SigninForm;
