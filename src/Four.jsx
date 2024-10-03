import React from "react";
import "./App.css";

function Four() {
  const items = ["item1", "item2", "item3", "item4", "item5"];
  return (
    <>
      <ul className="text-3xl">
        {items.map((item, index) => {
          return (
            <li key={index}>
              {index + 1 + "."} {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Four;
