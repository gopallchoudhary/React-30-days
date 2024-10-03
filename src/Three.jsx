import React, { useState } from "react";
import "./App.css";

function Three() {
  const [input, setInput] = useState("");
  return (
    <>
      <div className="w-full  mt-[20%] ml-[40%] p-10">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <p className="mt-4 text-white text-3xl">User Input : {input}</p>
      </div>
    </>
  );
}

export default Three;
