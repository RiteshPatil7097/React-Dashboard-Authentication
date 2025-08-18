import React from 'react'
import IconTab from './IconTab'
import Footer from './Footer'

const SupportCard = () => {
  return (
    <div className="max-w-[1100px] p-6 mx-2 my-8 mb-2  bg-white text-gray-600 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-wrap md:flex-row md:items-center md:justify-between gap-4">
           <IconTab />
           <Footer/>
        </div>
    </div>
  )
}

export default SupportCard