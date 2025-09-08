import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import SigninForm from './SigninForm';

const Signin = () =>  {

    const initialValues={
        email:"",
        password:""

    }
    const handleSubmit = (initialValues) =>{
        console.log("Form submitted:", initialValues);
    };

     return (
        <SigninForm initialValues={initialValues} handleSubmit={handleSubmit}/>
  );
};

export default Signin