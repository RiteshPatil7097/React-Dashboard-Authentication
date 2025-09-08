import React from 'react'
import { SiTicktick } from "react-icons/si";

const SuccessSent = () => {
   return (
      <>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="shadow-2xl text-center w-[30rem] p-6 bg-white rounded-xl">
  
            <SiTicktick className="text-purple-700 text-6xl mx-auto mb-4" />
            
            <h1 className="text-2xl font-semibold mb-2">Successfully Sent</h1>
            
            <p className="mb-4">
                We have sent instructions on how to reset your password to jenny.wilson@gmail.com. Please follow the instructions from the email.            
            </p>

          </div>
        </div>
      </>
    )
}

export default SuccessSent