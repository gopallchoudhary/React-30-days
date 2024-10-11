import React, { useState } from "react";

function Sixteen() {
  const [selectedColor, setSelectedColor] = useState("#000000");

  return (
    <>
      <input
        type="color"
        style={{ backgroundColor: selectedColor }}
        className="rounded-full border p-6"
        onChange={(e) => setSelectedColor(e.target.value)}
      />
      <div
        className={`w-[500px] h-[500px] mx-auto mt-10`}
        style={{ backgroundColor: selectedColor }}
      ></div>
    </>
  );
}

export default Sixteen;
