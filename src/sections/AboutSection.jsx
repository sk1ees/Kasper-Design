import React from "react";
import NavButton from "../components/NavButton";
import AboutInfo from "../components/AboutInfo";

const AboutSection = () => {
  return (
    <div className="w-full min-h-full mid:min-h-screen relative">
      {/* vector-background  */}

      <img
        src="/images/Vector7.png"
        alt=""
        srcset=""
        className="absolute w-full h-[30%] top-[10%]"
      />
      <img
        src="/images/Vector8.png"
        alt=""
        srcset=""
        className="absolute w-full h-[30%] top-[50%]"
      />

      {/* vector-background  */}

      <div className="gridAboutSection w-full  min-h-svh">
        
        <AboutInfo
          heading={"INTRODUCTION"}
          subHeading={"TO HYDRA VR"}
          desc={`Vitae sapien pellentesque habitant morbi tristique senectus et netus
           et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
           amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
           aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in.
           Lectus magna fringilla urna porttitor rhoncus vitae.`}
        />


        <div className="grid grid-cols-1 gap-5 md:gap-0  md:grid-cols-2 items-center justify-center  text-white">
          <img src="/images/AboutImage.png" alt="" className="w-1/2 md:w-3/4 mx-auto md:mx-0  z-10" />
          <div className="flex flex-col gap-5 items-center md:items-start justify-center w-full h-1/2 md:min-h-full">
            <div className="hidden md:block">
              <h1 className="fontStyle-bold text-3xl">
                ABOUT <br /> <span className="fontStyle-thin">HYDRA VR</span>
              </h1>
            </div>
            <div className="fontStyle-thin md:text-sm text-wrap text-[12px] md:text-left text-center tracking-wide  leading-relaxed">
              Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
              mattis rhoncus urna neque viverra justo. Vivamus at augue eget
              arcu dictum. Ultrices gravida dictum fusce ut placerat orci.
              Aenean et tortor at risus viverra adipiscing at in. Mattis aliquam
              faucibus purus in massa. Est placerat in egestas erat imperdiet
              sed. Consequat semper viverra nam libero justo laoreet sit amet.
              Aliquam etiam erat velit scelerisque in dictum non consectetur a.
              Laoreet sit amet cursus sit amet. Vel eros donec ac odio tempor
              orci dapibus. Sem nulla pha retra diam sit amet nisl suscipit
              adipiscing bibendum. Leo a diam sollicitudi n tempor.
            </div>
            <NavButton name={"Lets get in touch"} variant={"fill"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
