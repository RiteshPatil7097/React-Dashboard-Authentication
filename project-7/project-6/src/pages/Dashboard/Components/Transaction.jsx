import React from 'react'
import { BiSolidDollarCircle } from "react-icons/bi";
import { SiBitcoinsv } from "react-icons/si";

const Transaction = () => {
  return (
<div className='w-full md:flex-1 min-h-[350px]'>
    <div className='bg-white text-gray-600 p-6 mx-2 my-6 rounded-lg shadow-xl'>
        <p className='mb-1'>Recent Transactions</p>

       <div>
           <div className='flex flex-col gap-4'>
            
                {/* 1st deposit */}
                <div className='flex justify-between'>
                    <div className='flex'>
                    <BiSolidDollarCircle className='mr-1 mt-0.5 text-2xl bg-[#F3F3F7] rounded-2xl' />
                    <div>
                        <p className='text-[#171717] text-md font-semibold'>INR Deposit</p>
                        <p>2022-06-09 7:06 PM</p>
                    </div>
                    </div>
                    <p className='text-[#171717] text-md font-semibold'>+ ₹81,123.10</p>
                </div>

                {/* 2nd deposit */}
                <div className='flex justify-between'>
                    <div className='flex'>
                    <SiBitcoinsv className='mr-1 mt-0.5 text-2xl bg-[#F3F3F7] rounded-2xl' />
                    <div>
                        <p className='text-[#171717] text-md font-semibold'>BTC Sell</p>
                        <p>2022-05-27 12:32 PM</p>
                    </div>
                    </div>
                    <div className='text-right'>
                    <p className='text-[#171717] text-md font-semibold'>- 12.48513391 BTC</p>
                    <p>+ ₹81,123.10</p>
                    </div>
                </div>

                {/* 3rd Deposit */}
                <div className='flex justify-between'>
                    <div className='flex'>
                    <BiSolidDollarCircle className='mr-1 mt-0.5 text-2xl bg-[#F3F3F7] rounded-2xl' />
                    <div>
                        <p className='text-[#171717] text-md font-semibold'>INR Deposit</p>
                        <p>2022-06-09 7:06 PM</p>
                    </div>
                    </div>
                    <p className='text-[#171717] text-md font-semibold'>+ ₹81,123.10</p>
                </div>
          </div>

          <div className='bg-gray-500 text-[#171717] hover:bg-gray-700 hover:text-white mt-2 p-2 mx-1 rounded-2xl text-center font-semibold justify-center'>
            <button className=''>View All</button>
          </div>

        </div>
    </div>
</div>
  )
}

export default Transaction