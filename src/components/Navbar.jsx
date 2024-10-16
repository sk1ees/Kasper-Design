import { Button } from "@mui/material";
import React from "react";
import NavButton from "./NavButton";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className="w-full h-28  flex items-center   justify-between text-white">
      <div className="">
        <div className="flex gap-4 items-center  justify-center">
          <img
            src="/images/logoHydra.png"
            alt=""
            srcset=""
            className="w-12 md:w-20 h-auto"
          />
          <img
            src="/images/Frame.png"
            alt=""
            srcset=""
            className="w-12 md:w-16 h-auto"
          />
        </div>
      </div>

      <div className="">
        <ul className="md:flex hidden gap-12 text-sm">
          <li>About</li>
          <li>Services</li>
          <li>Technology</li>
          <li>How To</li>
        </ul>
      </div>
      <div className="md:flex hidden gap-12 ">
        <NavButton name={"CONTACT US"} variant={"outlined"} />
        <NavButton name={"JOIN HYDRA"} variant={"fill"} />
      </div>
      <div className="sm:block text-5xl md:hidden text-[#C0B7E8]">
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
