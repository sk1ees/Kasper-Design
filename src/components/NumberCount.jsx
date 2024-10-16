import React from "react";
import { FaArrowRight } from "react-icons/fa";

const NumberCount = ({ number, title }) => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center ">
      <div className="bg-[#0d0d0d89] w-44 h-44 rounded-full flex items-center justify-center">
        <div className="w-[80%] h-[80%] bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] rounded-full flex items-center justify-center">
          <h1 className="fontStyle-bold text-6xl text-[#343045]">{number}</h1>
        </div>
      </div>
      <div className="flex ms-1 justify-center gap-3  text-lg fontStyle-bold text-white">
        <div className="py-1  text-[#C0B7E8]">
          <FaArrowRight />
        </div>
        <div className="w-[60%]">
          {title}
          
        </div>
      </div>
    </div>
  );
};

export default NumberCount;
