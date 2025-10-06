import React, { useEffect } from "react";
import { FaEnvelope } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useMutation } from "react-query";
import { sendVerificationMail } from "../../../api/query/userQuery";

const RegisterEmailVerify = () => {
  const { email } = useParams();

  const { mutate, isLoading, isSuccess, isError, error } = useMutation({
    mutationKey: ["send-verification-mail"],
    mutationFn: sendVerificationMail,
  });

  useEffect(() => {
    if (email) {
      mutate({ email });
    }
  }, [email, mutate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="shadow-2xl text-center w-[30rem] p-8 bg-white rounded-xl">
        <FaEnvelope className="text-purple-700 text-6xl mx-auto mb-4" />
        
        <h1 className="text-2xl font-semibold mb-2 text-gray-800">
          Email Verification
        </h1>

        {isLoading ? (
          <p className="text-gray-600 mt-2">Sending verification email...</p>
        ) : isError ? (
          <p className="text-red-500 mt-2">Error: {error.message}</p>
        ) : isSuccess ? (
          <p className="text-green-600 mt-2">
            Verification email sent successfully!
          </p>
        ) : (
          <p className="text-gray-600 mb-4">
            We have sent you an email verification to{" "}
            <b className="text-gray-800">{email || "your email"}</b>. <br />
            If you didn’t receive it, click the button below.
          </p>
        )}

        <button
          onClick={() => mutate({ email })}
          disabled={isLoading}
          className={`mt-4 bg-gray-300 rounded-lg px-5 py-2 transition ${
            isLoading
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-600 hover:text-white"
          }`}
        >
          {isLoading ? "Sending..." : "Re-Send Email"}
        </button>
      </div>
    </div>
  );
};

export default RegisterEmailVerify;
