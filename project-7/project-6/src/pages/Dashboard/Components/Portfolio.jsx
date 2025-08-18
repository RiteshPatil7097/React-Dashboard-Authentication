import React from 'react'
import { FaCircleInfo } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import { LuArrowDownToLine } from "react-icons/lu";
import { IoArrowUpSharp } from "react-icons/io5";
import { SiBitcoinsv } from "react-icons/si";

const Portfolio = () => {
  return (
    <>
    <div className="max-w-[1100px] p-6 my-8 mb-2 mx-2 bg-white text-gray-600 rounded-lg shadow-md">
      
      <div className="flex flex-col md:flex-wrap md:flex-row md:items-center md:justify-between gap-4">
        
        <div>
          <div className="flex items-center gap-2">
            <p className="font-semibold">Total Portfolio Value</p>
            <FaCircleInfo className="text-gray-500 "/>
          </div>
          <p className="text-black text-xl font-bold mt-1">₹ 112,312.24</p>
        </div>

        <div>
          <p className="font-semibold mb-1">Wallet Balances</p>
          <div className="flex items-center gap-4 text-black font-medium">
            <div className="flex items-center gap-1">
              <p className="text-black text-xl font-bold mt-1">22.39401000</p>
              <SiBitcoinsv className='mt-1' />
            </div>
            <div className="flex items-center gap-1">
              <p className="text-black text-xl font-bold mt-1">1,300.00</p>
              <FaRupeeSign className='mt-1'/>
            </div>
          </div>
        </div>

        <div className="flex gap-2 flex-wrap md:max-w-[300px]">
          <button className="flex items-center rounded-xl px-3 py-2 h-10 text-white bg-[#5F00D9] hover:bg-purple-700">
            <LuArrowDownToLine className="mr-1" />
            <p className="hidden md:block">Deposit</p>
          </button>
          <button className="flex items-center rounded-xl px-3 py-2 h-10 text-white bg-[#5F00D9] hover:bg-purple-700">
            <IoArrowUpSharp className="mr-1" />
            <p className="hidden md:block">Withdraw</p>
          </button>
        </div>
      </div>
    </div>
    </>
    
  )
}
export default Portfolio