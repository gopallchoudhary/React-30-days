import React, { useEffect, useState } from "react";
import "./App.css";
function Seven() {
  const [time, setTime] = useState(60);

  useEffect(() => {
    setTimeout(() => {
      if (time > 0) setTime((prev) => prev - 1);
    }, 100);
  }, [time]);

  return (
    <div>
      <h1 className="text-5xl font-bold text-orange-500 mt-72">
        Time left: {time} second
      </h1>
    </div>
  );
}

export default Seven;
