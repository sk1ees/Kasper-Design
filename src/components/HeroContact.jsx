import React from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";

const HeroContact = () => {
  return (
    <div className="w-full rounded-full bg-gradient-to-r   from-[#211E2E] via-[#3A3456] to-[#211E2E] h-20 md:h-28 p-4">
      <div className=" w-full h-full   ">
        <div className="grid grid-cols-3  gap-5 h-full text-white">
          <div className="hidden md:flex gap-5 items-center justify-items-start border-e-[1px] border-[#8379b2]">
            <div className="icon ms-5">
              <MdOutlineLocationOn size={40} color="#C0B7E8" />
            </div>
            <div className="">
              <h1 className="text-xl fontStyle-bold">Pay Us a Visit</h1>
              <small className="fontStyle-thin text-xs">Union St, Seattle, WA 98101, United States</small>
            </div>
          </div>
          <div className="hidden md:flex gap-5 items-center justify-items-start border-e-[1px] border-[#8379b2]">
            <div className="icon ms-5">
              <FiPhoneCall size={40} color="#C0B7E8" />
            </div>
            <div className="">
            <h1 className="text-xl fontStyle-bold">Give Us a Call</h1>
            <small className="fontStyle-thin text-xs">(110) 1111-1010</small>
            </div>
          </div>
          <div className="hidden md:flex gap-5 items-center justify-items-start">
            <div className="icon ms-5">
              <FaRegEnvelope size={40} color="#C0B7E8" />
            </div>
            <div className="">
            <h1 className="text-xl fontStyle-bold">Send Us a Message</h1>
            <small className="fontStyle-thin text-xs">Contact@HydraVTech.com</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContact;
