import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import SignForm from './SignForm';

const Signup = () =>  {

    const initialValues={
        name:"",
        surname:"",
        email:"",
        password:"",
        repeatPassword:"",
        terms:"false",
    }
    const handleSubmit = (initialValues) =>{
        console.log("Form submitted:", initialValues);
    };

     return (
        <SignForm initialValues={initialValues} handleSubmit={handleSubmit}/>
  );
};

export default Signup