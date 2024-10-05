import React, { useState } from "react";
import "./App.css";

function Eleven() {
  const [file, setFile] = useState(null);
  //   const handlefileSubmit = (e) => {
  //     setFile(e.target.files[0]);
  //   };
  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
      />
      {file && <img src={URL.createObjectURL(file)} alt="uploaded" />}
      {/* {console.log(file)} */}
      
    </div>
  );
}

export default Eleven;
