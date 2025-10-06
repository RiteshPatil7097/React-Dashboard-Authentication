import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useMutation } from "react-query";
import { signupUser } from "../../../api/query/userQuery";
import SignForm from "./SignForm"

// 🔹 Validation schema
const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Surname is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Repeat password is required"),
  terms: Yup.boolean().oneOf([true], "You must accept the terms"),
});

const Signup = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const { mutate, isLoading, isError, error } = useMutation({
    mutationKey: ["signup"],
    mutationFn: signupUser,
    onSuccess: (data) => {
      alert("Signup successful! Please verify your email.");
      if (email) navigate(`/register-email-verify/${email}`);
    },
    onError: (error) => {
      alert(`Signup failed: ${error.message}`);
    },
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
    terms: false,
  };

  const handleSubmit = (values) => {
    console.log("Form Submitted:", values);
    setEmail(values.email);
    mutate({
      FirstName: values.firstName,
      LastName: values.lastName,
      email: values.email,
      password: values.password,
    });
  };

  if (isError) {
    return <div className="text-red-500 text-center mt-10">{error.message}</div>;
  }

  return (
    <SignForm
      initialValues={initialValues}
      handleSubmit={handleSubmit}
      validationSchema={validationSchema}
      isLoading={isLoading}
    />
  );
};

export default Signup;
