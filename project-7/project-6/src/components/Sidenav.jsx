import React from 'react'
import { RxDashboard } from "react-icons/rx";
import { RiArrowUpDownFill } from "react-icons/ri";
import { MdSupportAgent } from "react-icons/md";
import { Link } from 'react-router-dom';

const Sidenav = () => {

  const navLinks=[
    {
    icon:RxDashboard,
    text:"Dashboard",
    link:"/"
   },
  {
    icon:RiArrowUpDownFill,
    text:"Transaction",
    link:"/Transaction"
   }]

   const supportLink={
    icon:MdSupportAgent,
    text:"Support",
    link:"/Support"
   }
  return (
    <div className='shadow-lg max-w-64 h-[100vh] font-Ubuntu flex flex-col justify-between'>
      <div className=' flex flex-col gap-4 p-4 '>
          <img src='/images/logo1.png' alt='image' className='size-14 text-center' />
          {navLinks.map((nav)=>(
              <Link to={nav.link} key={nav.text}>
                  <div className='flex items-center gap-3 text-gray-800 hover:text-purple-600 cursor-pointer'>
                    <span>{nav.icon && <nav.icon className='w-5 h-5'/>}</span>
                    <span className='text-sm font-medium'>{nav.text}</span>
                  </div>
              </Link>
            ))}
      </div>

      <div className='mx-auto'>
        <Link to={supportLink.link}>
           <div className='flex items-center py-4 pr-36 gap-3 text-gray-800 hover:text-purple-600 cursor-pointer'>
                <supportLink.icon className='w-5 h-5' />
                <span className='text-sm font-bold'>{supportLink.text}</span>
           </div>   
        </Link>
      </div>
    </div>
  )
}

export default Sidenav