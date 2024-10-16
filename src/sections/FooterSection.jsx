import React from "react";
import NavButton from "../components/NavButton";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";

const FooterSection = () => {
  return (
    <div className="w-full min-h-[70vh] flex flex-col gap-3 py-12 md:p-0 items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-4 w-full  gap-5 h-full md:h-[40vh] text-sm text-white items-center justify-center">
        <div className="flex justify-center md:justify-between ">
          <img src="/images/logoHydra.png" alt="" className= "w-48 h-48" />
          <img src="/images/Vector12.png" alt="" className="md:block hidden" />
        </div>
        <div className="hidden md:flex justify-around items-center">
          <ul className="uppercase flex flex-col  gap-4 ">
            <li>About</li>
            <li>Services</li>
            <li>Technology</li>
            <li>How to</li>
            <li>join hydra</li>
          </ul>
          <img src="/images/Vector12.png" alt="" />
        </div>
        <div className="hidden md:flex justify-around items-center">
          <ul className="uppercase flex flex-col  gap-4 ">
            <li>f.a.q</li>
            <li>sidemaps</li>
            <li>conditions</li>
            <li>licenses</li>
          </ul>
          <img src="/images/Vector12.png" alt="" />
        </div>

        <div className=" flex-col flex justify-center items-center md:items-start gap-6 py-6 md:p-0 w-full h-full">
          <h1>SOCIALIZE WITH HYDRA</h1>

          <div className="flex gap-2">
            <div className="w-9 h-9 rounded-full bg-[#C0B7E8] text-[#302C42] text-2xl flex items-center justify-center">
              <FaFacebook />
            </div>
            <div className="w-9 h-9 rounded-full bg-[#C0B7E8] text-[#302C42] text-2xl flex items-center justify-center">
              <FaTwitter /> 
            </div>
            <div className="w-9 h-9 rounded-full bg-[#C0B7E8] text-[#302C42] text-2xl flex items-center justify-center">
            <FaLinkedinIn />
            </div>
            <div className="w-9 h-9 rounded-full bg-[#C0B7E8] text-[#302C42] text-2xl flex items-center justify-center">
            <FaYoutube />
            </div>
            <div className="w-9 h-9 rounded-full bg-[#C0B7E8] text-[#302C42] text-2xl flex items-center justify-center">
            <FaInstagram />
            </div>
            <div className="w-9 h-9 rounded-full bg-[#C0B7E8] text-[#302C42] text-2xl flex items-center justify-center">
            <FaPinterest />
            </div>
          </div>
          <NavButton name={"build our world"} variant={"fill"} />
        </div>
      </div>
      <div className="">
        <img src="/images/Vector11.png" alt="" />
      </div>
      <div className="p-8 text-white fontStyle-regular text-xs text-center">
        <h1 >
          2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED{" "}
        </h1>
      </div>
    </div>
  );
};

export default FooterSection;
