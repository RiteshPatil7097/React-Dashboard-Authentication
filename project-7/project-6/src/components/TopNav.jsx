import { useState } from 'react';
import { IoIosContact } from "react-icons/io";
import Sidenav from './Sidenav';
import { Link } from 'react-router-dom';

const TopNav = ({title, isOpen}) => {
    const [open, setOpen] = useState(false);

    const supportLink = {
      text: "Support",
      link: "/Support"
    };
  return (
    <div className={`shadow-xl bg-white ${isOpen ? 'bg-gray-600':'bg-white'} `}>
      <div className="max-w-[960px] container mx-auto flex items-center justify-between px-4 py-3">

        <h1 className="text-2xl font-bold">{title}</h1>

        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className=" text-black px-4 py-2 rounded-md flex items-center gap-2"
          >
            <IoIosContact className='size-8 cursor-pointer hover:text-purple-600' />
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-56 bg-white border rounded-md shadow-lg z-50">
              <ul className="py-1">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
                <Link to={supportLink.link}>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Support</li>
                </Link>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TopNav