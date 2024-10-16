import React from "react";
import AboutInfo from "../components/AboutInfo";
import { FaArrowRight } from "react-icons/fa";
import NumberCount from "../components/numberCount";

const ProcessSection = () => {
  return (
    <div className="w-full h-full md:h-[70vh] md:p-0 py-16  relative">
      <AboutInfo
        heading={"HOW WE BUILD"}
        subHeading={"WITH HYDRA VR?"}
        desc={`Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.`}
      />

      {/* vector background  */}
      <img
        src="/images/Vector9.png"
        alt=""
        srcset=""
        className="absolute top-[35%] z-[1]"
      />
      {/* vector background  */}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 w-full h-3/4  items-center justify-around   relative z-[2] ">
        <NumberCount number={"01"} title={"3D Conception & Design"} />
        <NumberCount number={"02"} title={"Interaction Design"} />
        <NumberCount number={"03"} title={" VR World User Testing"} />
        <NumberCount number={"04"} title={"Hydra VR Deploy"} />
      </div>
    </div>
  );
};

export default ProcessSection;
