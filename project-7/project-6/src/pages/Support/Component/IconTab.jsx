import React from 'react'
import { IoMdMail } from "react-icons/io";
import Form from './Form';

const IconTab = () => {
  return (
    <div className="w-full max-w-[1100px] mx-auto px-4">
        <div className="font-semibold pl-4 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
            {/* Contact Info */}
            <div className="sm:w-1/2">
                <IoMdMail className="size-6 text-[#5F00D9]" />
                <h1 className="text-2xl font-bold mt-2">Contact Us</h1>
                <p className="mt-1">
                Have a question or just want to know more? Feel free to reach out to us.
                </p>
            </div>

            {/* Form Section */}
            <div className="sm:w-1/2">
                <Form />
            </div>
        </div>
    </div>
  )
}

export default IconTab