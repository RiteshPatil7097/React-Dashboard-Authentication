import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";

const SignForm = ({ initialValues, handleSubmit }) => {
  return (
    <div className="w-[408px] p-6 mx-auto min-h-[100vh] bg-white text-gray-600 rounded-lg shadow-xl flex items-center">
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
            Create a free account by filling data below.
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col w-full md:w-1/2">
              <label className='text-[#171717]'>Name:</label>
              <Field name="name" type="text" className="border-2 border-gray-300 rounded-lg p-2" />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
            </div>
            <div className="flex flex-col w-full md:w-1/2">
              <label className='text-[#171717]'>Surname:</label>
              <Field name="surname" type="text" className="border-2 border-gray-300 rounded-lg p-2" />
              <ErrorMessage name="surname" component="div" className="text-red-500 text-sm" />
            </div>
          </div>

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

          <div className="flex flex-col">
            <label className='text-[#171717]'>Repeat Password:</label>
            <Field name="repeatPassword" type="password" className="border-2 border-gray-300 rounded-lg p-2" />
            <ErrorMessage name="repeatPassword" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="flex flex-row gap-2 items-center">
            <Field type="checkbox" name="terms" />
            <label>I agree with</label>
            <p className="text-[#5F00D9] cursor-pointer">Terms and Conditions</p>
          </div>
          <ErrorMessage name="terms" component="div" className="text-red-500 text-sm" />

          <button type="submit" className="bg-gray-300 rounded-lg p-2 text-center cursor-pointer hover:bg-gray-400">
            Create an Account
          </button>

          <div className="flex flex-row gap-1 justify-center items-center">
            <p>Already Have an Account?</p>
            <p className="text-[#5F00D9] cursor-pointer hover:text-purple-400">Log in</p>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default SignForm;
