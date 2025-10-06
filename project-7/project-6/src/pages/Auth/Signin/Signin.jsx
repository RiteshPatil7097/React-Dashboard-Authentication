import React from "react";
import { useMutation } from "react-query";
import { signinUser } from "../../../api/query/userQuery";
import SigninForm from "./SigninForm";
import * as Yup from "yup";
import useAuth from "../../../Hooks/useAuth";
import { toast } from "react-toastify"; // Using react-toastify for alerts

// ✅ Validation schema
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Signin = () => {
  const { login } = useAuth();

  // ✅ Mutation for Sign-in API call
  const { mutate, isLoading, isError, error } = useMutation({
    mutationKey: ["signin"],
    mutationFn: signinUser,
    onSuccess: (data) => {
      const { token } = data;
      if (token) {
        login(token);
        toast.success("Login Successful 🎉");
      } else {
        toast.error("Invalid credentials!");
      }
    },
    onError: (error) => {
      toast.error(error.message || "Something went wrong!");
    },
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values) => {
    mutate({
      email: values.email,
      password: values.password,
    });
  };

  return (
    <SigninForm
      initialValues={initialValues}
      handleSubmit={handleSubmit}
      validationSchema={validationSchema}
      isLoading={isLoading}
    />
  );
};

export default Signin;
