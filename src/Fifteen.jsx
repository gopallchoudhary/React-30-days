import React, { useState } from "react";

function Fifteen({ items, itemsPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  console.log(currentItems);
  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const pageNo = [];
  for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
    pageNo.push(i);
  }

  return (
    <div className="mt-44 flex flex-col">
      {currentItems.map((item, index) => (
        <h1 key={index} className="text-2xl font-semibold text-blue-700">
          {item}
        </h1>
      ))}
      {/* <button
        onClick={nextPage}
        className=" w-1/6 mx-auto border-2 p-2 mt-2 rounded-xl bg-blue-400 text-white font-semibold"
      >
        Next Page
      </button>
      <button
        onClick={prevPage}
        className="w-1/6 mx-auto border-2 p-2 mt-2 rounded-xl bg-blue-400 text-white font-semibold"
      >
        Previous Page
      </button> */}

      {pageNo.map((num) => (
        <p
          key={num}
          onClick={() => setCurrentPage(num)}
          className="hover:cursor-pointer font-semibold text-lg mt-2"
        >
          Page: {num}
        </p>
      ))}
    </div>
  );
}

export default Fifteen;
