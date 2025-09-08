import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from "yup";

// ✅ Validation schema
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
});

const Forgot = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Formik
        initialValues={{ email: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Email submitted:", values);
          // here you can call API to send reset link
          navigate("/ResetPassword"); // ✅ Navigate only if form is valid
        }}
      >
        {({ isValid, dirty }) => (
          <div className="shadow-2xl w-[30rem] p-6 bg-white rounded-xl">
            <Form>
              {/* Back button */}
              <Link to={"/Signin"}>
                <FaArrowLeftLong className="text-purple-700 text-2xl mb-3" />
              </Link>

              <h1 className="text-2xl font-semibold mb-2">Forgot Password</h1>

              <p className="mb-4">
                Enter your email address for the account you want to reset.
              </p>

              {/* Email field */}
              <div className="flex flex-col mb-3">
                <label className="text-[#171717] font-semibold">Email:</label>
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

              {/* Submit button */}
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
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Forgot;
