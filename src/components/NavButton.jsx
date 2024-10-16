import React from "react";

const NavButton = ({ name, variant }) => {
  const ButtonVariant =
    variant === "outlined"
      ? "bg-transparent border px-5 py-2 rounded-full text-xs fontStyle-bold uppercase"
      : "bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] text-black px-5 py-2 rounded-full text-xs  fontStyle-bold uppercase";

  return (
    <div>
      <button className={ButtonVariant}>{name}</button>
    </div>
  );
};

export default NavButton;
