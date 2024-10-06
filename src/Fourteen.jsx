import React, { useState } from "react";

function Fourteen({ items }) {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border-2 border-black mb-6"
        value={searchTerm}
      />
      <ul className="text-2xl font-semibol">
        {filteredItems.map((item, index) => (
          <li className="mb-2" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Fourteen;
