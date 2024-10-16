import { TextField } from "@mui/material";
import React from "react";
import NavButton from "../components/NavButton";

const OptInSection = () => {
  return (
    <div className="w-full min-h-screen bg-black rounded-[2rem] md:rounded-[6rem] radialContactGradient flex flex-col  ">
      <div className="w-3/4 m-auto text-lg md:text-2xl text-center flex flex-col items-center justify-center gap-4 text-white">
        <h1 className="fontStyle-bold uppercase">Join Hydra</h1>
        <img src="/images/Vector10.png" alt="" srcset="" />
        <h1 className="fontStyle-thin">Let’s Build Your VR Experience</h1>
      </div>
      <div className="w-3/4 mx-auto min-h-[50vh] flex flex-col gap-5  text-white">
        <div className="grid  grid-cols-1 md:grid-cols-2  gap-2 md:px-5 h-28 min-w-full  md:h-16 ">
          <input
            type="text"
            className="w-full px-10 rounded-full bg-transparent border outline-none border-white"
            placeholder="First Name"
          />
          <input
            type="text"
            className="w-full px-10 rounded-full bg-transparent border outline-none border-white"
            placeholder="Last Name"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-2 md:px-5 h-28 min-w-full  md:h-16 ">
          <input
            type="email"
            className="w-full px-10 rounded-full bg-transparent border outline-none border-white"
            placeholder="Email"
          />
          <input
            type="number"
            className="w-full px-10 rounded-full bg-transparent border outline-none border-white"
            placeholder="Phone Number"
          />
        </div>
        <div className="grid grid-cols-1 md:px-5 h-12 min-w-full md:h-16">
          <input
            type="text"
            className="w-full px-10 rounded-full  bg-transparent border outline-none border-white"
            placeholder="Subject"
          />
        </div>
        <div className="grid grid-cols-1 md:px-5 min-w-full h-44">
          <textarea
            name=""
            id=""
            className="w-full py-5 px-10 rounded-[2rem]  bg-transparent border outline-none border-white"
            placeholder="Tell us something..."
          ></textarea>
        </div>
      </div>
      <div className="w-3/4 m-auto flex items-center justify-center">
        <NavButton name={"send to hydra"} variant={"fill"} />
      </div>
    </div>
  );
};

export default OptInSection;
