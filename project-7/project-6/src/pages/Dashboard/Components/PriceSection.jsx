import React, { useState } from 'react';
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";

const PriceSection = () => {
  const timestamps = ["7:15 PM", "12:55 AM", "6:35 AM", "12:15 PM", "5:55 PM"];

  // Tab labels
  const tabs = ["1D", "1W", "1M"];
  const [activeTab, setActiveTab] = useState(0);

  const tabImages = [
    "/images/Graph.png", // For 1D
    "/images/Graph2.jpg", // For 1W
    "/images/Graph3.jpg"  // For 1M
  ];

  return (
    <div className=" w-full md:flex-1 min-h-[350px]">
      <div className="flex flex-col bg-white rounded-lg my-6 mx-2 p-6 text-gray-600 shadow-xl">
        
        {/* Price Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-col">
            <p className="font-semibold mb-2">Current Price</p>
            <div className="flex items-center gap-4">
              <p className="text-black text-xl font-bold">₹ 26,670.25</p>
              <div className="flex items-center text-[#059669]">
                <IoMdTrendingUp className="mr-1" />
                <p>0.04%</p>
              </div>
            </div>
          </div>

          {/* Buy / Sell Buttons */}
          <div className="flex md:flex-row gap-2">
            <button className="flex items-center rounded-xl px-3 py-2 h-10 text-white bg-[#5F00D9] hover:bg-purple-700">
              <FaPlusCircle className="mr-1" />
              <p className="hidden md:block">Buy</p>
            </button>
            <button className="flex items-center rounded-xl px-3 py-2 h-10 text-white bg-[#5F00D9] hover:bg-purple-700">
              <FaMinusCircle className="mr-1" />
              <p className="hidden md:block">Sell</p>
            </button>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="flex gap-3 mt-4">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              className={`px-4 py-1 rounded-full border transition-colors duration-200 ${
                activeTab === index
                  ? "bg-green-100 text-green-800 border-green-400 font-semibold"
                  : "bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Graph */}
        <div className="mt-4">
          <img src= {tabImages[activeTab]} alt="graph" className="w-full" />
          <div className="flex gap-4 justify-around">
            {timestamps.map((timestamp) => (
              <p className="font-medium text-[#797E82]" key={timestamp}>
                {timestamp}
              </p>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default PriceSection;
