import React, { useState } from "react";
import "./App.css";

function Five() {
  const [isToggle, setIsToggle] = useState(false);
  const handleSubmit = () => {
    setIsToggle((prev) => !prev);
    console.log(isToggle);
  };
  return (
    <div>
      <label>
        <input type="checkbox" onChange={handleSubmit} />
      </label>
      <p className="text-5xl">{isToggle ? "ON" : "OF"}</p>
    </div>
  );
}

export default Five;
