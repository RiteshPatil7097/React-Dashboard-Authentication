import React from 'react'
import DashBoardLayout from '../../components/DashBoardLayout'
import { LuArrowDownToLine } from "react-icons/lu";
import Tabs from './Component/Tabs';

const Transaction = () => {
   

  return (
    <div>
        <DashBoardLayout title={"Transaction"}>
           <div className='flex justify-end my-3'>
              <button className="flex items-center  rounded-xl px-3 py-2 h-10 text-white bg-[#5F00D9] hover:bg-purple-700">
                <LuArrowDownToLine className="mr-1" />
                <p className="hidden md:block">Export csv</p>
              </button>
           </div>
           <div>
             <Tabs />
           </div>
        </DashBoardLayout>
    </div>
  )
}

export default Transaction