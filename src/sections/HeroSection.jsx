import React from "react";
import Navbar from "../components/Navbar";
import NavButton from "../components/NavButton";
import HeroContact from "../components/HeroContact";

const HeroSection = () => {
  return (
    <div className="w-full min-h-screen relative">
      <Navbar />

      {/* vector-background  */}

      <img
        src="/images/Vector4.png"
        alt=""
        srcset=""
        className= " hidden md:block absolute w-[20%] h-[60%] top-[25%]"
      />
      <img
        src="/images/Vector1.png"
        alt=""
        srcset=""
        className= " hidden md:block absolute right-0 w-[30%] h-[70%]"
      />
      <img
        src="/images/Vector2.png"
        alt=""
        srcset=""
        className= " hidden md:block absolute right-20 top-12  w-[30%] h-[75%]"
      />
      <img
        src="/images/Vector3.png"
        alt=""
        srcset=""
        className= " hidden md:block absolute right-14 top-48 rotate-180  w-[45%] h-[55%]"
      />
      {/* vector-background  */}

      <div className="grid grid-cols-1 md:grid-cols-2 text-white min-h-[65svh] ">
        <div className="flex items-center md:items-start justify-center flex-col w-full md:w-3/4 gap-6 order-2 md:order-1 " >
          <h1 className="text-xl text-center md:text-left md:text-3xl fontStyle-bold ">
            Dive Into The Depths <br />
            Of Virtual Reality
          </h1>
          <p className="hidden md:block md:text-sm fontStyle-regular">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
            Lectus mauris eros in vitae .
          </p>
          <NavButton variant={"fill"} name={"BUILD YOUR WORLD"} />
        </div>
        <div className="flex items-center justify-end order-1 ">
          <img
            src="/images/HeroImage1.png"
            alt=""
            srcset=""
            className="lg:w-3/4  drop-shadow-2xl"
          />
        </div>
      </div>
<div className="z-20 relative">

      <HeroContact />
</div>
    </div>
  );
};

export default HeroSection;
