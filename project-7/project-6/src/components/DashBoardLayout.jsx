import React, { useState,Children } from 'react'
import Sidenav from '../components/Sidenav'
import TopNav from '../components/TopNav'
import SideDrawer from './SideDrawer'

const DashBoardLayout = ({title,children}) => {
   const [isOpen,setIsOpen]= useState(false);

  return (
    <div className='flex h-screen relative overflow-hidden'>

      <div className='w-[256px] hidden md:block bg-white'>
        <Sidenav/>
      </div>
      
      <SideDrawer isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className={`flex-1 bg-gray-200 overflow-y-auto transition-all duration-300 ease-in-out ${isOpen ? 'ml-64': ''} `}>
         <TopNav title={title} isOpen={isOpen} setIsOpen={setIsOpen} />
         <div className='max-w-[950px] lg:ml-[150px] px-4 '>{children}</div>
      </div>
      
    </div>
  )
}
export default DashBoardLayout