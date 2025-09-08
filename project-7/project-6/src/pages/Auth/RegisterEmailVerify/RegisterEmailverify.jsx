import React from 'react'
import { FaEnvelope } from "react-icons/fa";

const RegisterEmailverify = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="shadow-2xl text-center w-[30rem] p-6 bg-white rounded-xl">

          <FaEnvelope className="text-purple-700 text-6xl mx-auto mb-4" />
          
          <h1 className="text-2xl font-semibold mb-2">Email Verification</h1>
          
          <p className="mb-4">
            We have sent you an email verification to <b>jenny.wilson@gmail.com</b>.  
            If you didn’t receive it, click the button below.
          </p>
          
          <button className="bg-gray-300 rounded-lg px-4 py-2 hover:bg-gray-600 hover:text-white">
            Re-Send Email
          </button>
          
        </div>
      </div>
    </>
  )
}

export default RegisterEmailverify
