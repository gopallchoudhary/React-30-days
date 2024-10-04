import React, { useState } from "react";
import "./App.css";

function Eight() {
  const [bgColor, setBgColor] = useState("red");
  const color = () => {
    bgColor == 'red' ? setBgColor('yellow') : setBgColor('red')
  }
  return (
    <div
      className="w-full h-screen duration-700"
      style={{ backgroundColor: bgColor }}
    >
      <button
        className="border-none bg-white rounded-full p-2 mt-[52%] text-black"
        onClick={color}
      >
        Change Color
      </button>
    </div>
  );
}

export default Eight;
