import React from "react";
import AboutInfo from "../components/AboutInfo";
import NavButton from "../components/NavButton";
import Card from "../components/Card";
import cardData from "../components/CardData";


const ServicesSection = () => {
  return (
    <div className="w-full min-h-[90vh] ">
      <AboutInfo
        heading={"WHY BUILD"}
        subHeading={"WITH HYDRA?"}
        desc={`Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.`}
      />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 fontStyle-regular py-24">
        {cardData.map((item) => (
          <Card  title={item.title} desc={item.desc} image={item.image}/>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
