import React, { useState } from "react";
import TransactionTable from "./TransactionTable";
import { IoSearch } from "react-icons/io5";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const tabs = [
    { id: "All",     label: "All",     content: <TransactionTable filterType="All"      searchQuery={searchQuery}/>,   count: 349 },
    { id: "Deposit", label: "Deposit", content:<TransactionTable filterType="Deposit"   searchQuery={searchQuery}/>,   count: 114 },
    { id: "WithDraw",label: "WithDraw",content: <TransactionTable filterType="Withdraw" searchQuery={searchQuery}/>,   count: 55 },
    { id: "Trade",   label: "Trade",   content: <TransactionTable filterType="Trade"    searchQuery={searchQuery}/>,   count: 19 },
  ];

  return (
    <div className="max-w-[1100px] p-6   mx-2 bg-white text-gray-600 rounded-lg shadow-md">
       <div className="flex flex-row justify-between flex-wrap overflow-x-auto items-start w-full ">

        <div className="flex  border-gray-300 gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2 px-4 flex flex-row items-center text-sm font-medium focus:outline-none 
                ${ activeTab === tab.id
                  ? "border-b-2  border-blue-500 text-blue-500"
                  : "text-gray-500 hover:text-blue-500"
              }`}
            >
              <p>{tab.label}</p>
              <p className="bg-[#F3F3F7] px-2 py-1 rounded-xl">{tab.count}</p>
            </button>
          ))}
        </div>

        <div>
          <div className="flex gap-1 p-1 rounded-md border-1">
            <IoSearch className="size-6 px-1"/>
            <div className="hidden md:block">
              <input type="text" placeholder="Search..."
                     value={searchQuery}
                     onChange={(e) => setSearchQuery(e.target.value)} />
            </div>
            
          </div>
        </div>
       </div>

        <div className="p-4 w-full text-black overflow-auto border-gray-300 border-t-0">
            {tabs.find((tab) => tab.id === activeTab)?.content} 
        </div>
    </div>
  );
}
