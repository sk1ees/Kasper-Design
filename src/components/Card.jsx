import React from "react";
import NavButton from "./NavButton";

const Card = ({ title, desc, image }) => {
  return (
    <div className=" radialGradient  w-full h-[60vh] rounded-3xl flex flex-col gap-5 items-center text-white justify-center px-5 leading-tight">
      <div className="cardImage w-44 h-44 bg-slate-900 rounded-full relative items-center flex justify-center">
        <img
          src={image}
          alt=""
          srcset=""
          className="w-[90%] h-[90%] absolute rounded-full "
        />
      </div>

      <div className="cardDesc text-center flex flex-col gap-2 items-center justify-center">
        <h1 className="mb-4 text-xl  py-5 border-b-2 inline-block">
          {title}
        </h1>
        <small className="opacity-50">{desc}</small>
      </div>
      <div className="CardButton">
        <NavButton name={"try it now"} />
      </div>
    </div>
  );
};

export default Card;
