import React from 'react';
import iceland from "../Assets/iceland.png";
import halong from "../Assets/halong.png";
import french from "../Assets/french.png";
import sea from "../Assets/sea.png";

const Tours = () => {
  return (
    <div className="bg-white mt-8 overflow-x-hidden" id='explore'>
      {/* Top Button */}
      <div className="flex justify-center">
        <button className="bg-[#d6e6cd] px-6 py-3 rounded-md font-semibold text-lg">
          Popular Tours
        </button>
      </div>

      {/* Heading */}
      <div className="mt-5 flex justify-center text-center px-4">
        <h1 className="text-black text-5xl font-bold capitalize max-sm:text-3xl">
          Amazing tour places <br /> around the World
        </h1>
      </div>

      {/* Card Section */}
      <div className="flex flex-wrap justify-center w-full h-auto mt-7 gap-4">
        <div className="w-[270px] h-[280px] bg-gray-100 rounded-md shadow-gray-200 shadow-xl">
          <img src={iceland} alt="iceland" className="rounded-tr-md rounded-tl-md w-full object-cover" />
          <div className="justify-center mt-6">
            <h3 className="text-center text-xl text-black font-semibold">Discovery Island Kayak Tour</h3>
            <p className="text-center text-lg text-gray-700">Main Street, Brooklyn, NY</p>
          </div>
        </div>

        <div className="w-[270px] h-[280px] bg-gray-100 rounded-md shadow-gray-200 shadow-xl">
          <img src={french} alt="french" className="rounded-tr-md rounded-tl-md w-full object-cover" />
          <div className="justify-center mt-6">
            <h3 className="text-center text-xl text-black font-semibold">Discovery Island Kayak Tour</h3>
            <p className="text-center text-lg text-gray-700">Main Street, Brooklyn, NY</p>
          </div>
        </div>

        <div className="w-[270px] h-[280px] bg-gray-100 rounded-md shadow-gray-200 shadow-xl">
          <img src={halong} alt="halong" className="rounded-tr-md rounded-tl-md w-full object-cover" />
          <div className="justify-center mt-6">
            <h3 className="text-center text-xl text-black font-semibold">Discovery Island Kayak Tour</h3>
            <p className="text-center text-lg text-gray-700">Main Street, Brooklyn, NY</p>
          </div>
        </div>

        <div className="w-[270px] h-[280px] bg-gray-100 rounded-md shadow-gray-200 shadow-xl">
          <img src={sea} alt="sea" className="rounded-tr-md rounded-tl-md w-full object-cover" />
          <div className="justify-center mt-6">
            <h3 className="text-center text-xl text-black font-semibold">Discovery Island Kayak Tour</h3>
            <p className="text-center text-lg text-gray-700">Main Street, Brooklyn, NY</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tours;
