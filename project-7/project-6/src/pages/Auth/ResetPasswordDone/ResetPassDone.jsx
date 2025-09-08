import React from 'react'
import { SiTicktick } from "react-icons/si";
import { Link } from 'react-router-dom';

const ResetPassDone = () => {
  return (
      <>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="shadow-2xl text-center w-[30rem] p-6 bg-white rounded-xl">
  
            <SiTicktick className="text-purple-700 text-6xl mx-auto mb-4" />
            
            <h1 className="text-2xl font-semibold mb-2">Successfully Registration</h1>
            
            <p className="mb-4">
                Hurray! You have successfully created your account. Enter the app to explore all it’s features.
            </p>
            <Link to={"/Signin"}>
                <button className="bg-gray-300 rounded-lg px-4 py-2 hover:bg-gray-600 hover:text-white">
                    Sign in
                </button>
            </Link>

            
          </div>
        </div>
      </>
    )
}

export default ResetPassDone
