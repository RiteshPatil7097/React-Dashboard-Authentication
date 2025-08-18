import React from 'react'
import { TbMessageCircleFilled } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="rounded-2xl w-full flex flex-col md:flex-row gap-8 shadow-md">
      {/* Left Section */}
      <div className="font-semibold md:w-1/2 p-4">
        <TbMessageCircleFilled className="size-6 text-[#5F00D9]" />
        <h1 className="text-2xl font-bold mt-2">Live Chat</h1>
        <p className="mt-1">
          Don’t have time to wait for the answer? Chat with us now.
        </p>
      </div>

      {/* Right Section */}
      <div className="bg-[#5F00D9] md:w-1/2 rounded-2xl text-white p-4">
        <div className="mb-2">
          <p className="inline-block rounded-2xl px-2 py-1 bg-white text-[#5F00D9]">Chatbot</p>
        </div>
        <p className="font-bold">Chat with us now</p>
      </div>
    </div>
  )
}

export default Footer
