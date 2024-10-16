import React from "react";

const AboutInfo = ({ heading, subHeading, desc }) => {
  return (
    <div className="grid grid-cols-1 md:p-0 py-12  md:grid-cols-2 items-center justify-center  text-white">
      <div className="text-center md:text-start">
        <p className="text-3xl fontStyle-thin">
          <span className="fontStyle-bold uppercase">{heading}</span>
          <div className="block md:flex items-center gap-3 h-1/2 uppercase text-center md:text-start">
            {subHeading}
            <img src="/images/arrow1.png" alt="" className="w-[30%] hidden md:block " />
          </div>
        </p>
      </div>
      <div className="">
        <small className="fontStyle-thin hidden md:block">{desc}</small>
      </div>
    </div>
  );
};

export default AboutInfo;
