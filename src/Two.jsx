import React, { useState } from "react";

function Two() {
  const [number, setNumber] = useState(0);

  //!<--Increment-->
  const increment = () => {
    setNumber((prev) => prev + 1);
  };

  //!<--Decrement-->
  const decrement = () => {
    setNumber((prev) => prev - 1);
  };
  return (
    <>
      <div className="text-white mt-[20%] flex items-center gap-10 justify-center mx-auto p-10">
        <button
          onClick={increment}
          className="border p-3 rounded-lg bg-slate-100 text-black"
        >
          Add
        </button>
        <h3>{number}</h3>
        <button onClick={decrement} className="border p-3 rounded-lg bg-slate-100 text-black">Remove</button>
      </div>
    </>
  );
}

export default Two;
