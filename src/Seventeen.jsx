import React, { useState } from "react";

function Seventeen() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    console.log(isOpen);
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-4  bg-gray-700 h-screen text-white">
      <button
        className="text-4xl md:hidden cursor-pointer"
        onClick={toggleMenu}
      >
        &#9776;
      </button>
      <ul
        className={`md:block absolute w-full top-[60px] ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <li className="p-[10px] text-[#fff]">Home</li>
        <li className="p-[10px] text-[#fff]">About</li>
        <li className="p-[10px] text-[#fff]">Services</li>
        <li className="p-[10px] text-[#fff]">Contact</li>
      </ul>
    </div>
  );
}

export default Seventeen;
