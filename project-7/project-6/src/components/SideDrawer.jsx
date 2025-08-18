import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbXboxXFilled } from "react-icons/tb";
import { RxDashboard } from "react-icons/rx";
import { RiArrowUpDownFill } from "react-icons/ri";
import { MdSupportAgent } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function SideDrawer({isOpen,setIsOpen}) {
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
     },
     {
      icon:MdSupportAgent,
      text:"Support",
      link:"/Support"
    }]
    

  return (
    <>
      <div className="md:hidden p-4">
        <button  onClick={() => setIsOpen(true)}>
          <GiHamburgerMenu className="size-6"/>
        </button>
      </div>

      {/* Overlay and Drawer */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
             className="fixed inset-0 bg-auto z-40"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Drawer */}
          <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out transform translate-x-0">
            <div className="p-4 border-b text-lg font-semibold">Menu</div>
            <ul className="p-4 space-y-3">
              {navLinks.map((nav)=>(
                <Link to={nav.link} key={nav.text}>
                   <li className="hover:text-purple-600 cursor-pointer flex">
                        {
                           nav.text==="Dashboard" 
                          ?
                           <><RxDashboard className="mr-3 mt-1"/> {nav.text}</>
                          : 
                           nav.text==="Transaction"
                          ?
                            <><RiArrowUpDownFill className="mr-3 mt-1"/> {nav.text}</> 
                          : <><MdSupportAgent className="mr-3 mt-1"/> {nav.text}</>
                        }
                  </li>
                 </Link>
              ))}
              

            </ul>

            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-8 text-gray-500 hover:text-red-500"
            >
              <TbXboxXFilled className="size-6" />
            </button>
          </div>
        </>
      )}
    </>
  );
}
