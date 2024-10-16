import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const TechSection = () => {
  return (
    <div className="w-full min-h-[60vh]  grid grid-rows-2 ">
      <div className="w-full  h-[40%] md:w-full md:h-[60%] text-white techImageBackground rounded-full flex flex-col items-center justify-center relative">
        <div className="w-20 h-20 top-[85%] hidden  bg-[#0e0e0e9c] rounded-full absolute md:flex items-center justify-center">
          <div className="flex items-center justify-center text-3xl text-[#433D60] w-[75%] h-[75%] bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] rounded-full">
          <IoIosArrowDown />
          </div>
        </div>
        <h1 className="fontStyle-bold text-sm md:text-3xl">TECHNOLOGIES & HARDWARE</h1>
        <h1 className="fontStyle-thin text-sm md:text-2xl">USED BY HYDRA VR.</h1>
      </div>
      <div className="w-full h-3/4  flex  gap-5 items-center justify-around ">
        <img src="/images/CompanyLogo/unrealEngine.png" alt="" />
        <img src="/images/CompanyLogo/unity.png" alt="" />
        <img src="/images/CompanyLogo/oculus.png" alt="" />
        <img src="/images/CompanyLogo/vive.png" alt="" />
      </div>
    </div>
  );
};

export default TechSection;
