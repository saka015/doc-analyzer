import { useContext, useState } from "react";
import { UndoContext } from "./UndoContext";

const TextContainer = ({ width, height, placeholder }) => {
  
  const containerStyles = {
    width: width || "80%",
    height: height || "1000px",
  };


  const handleChange = (e) => {
    const newText = e.target.value;
    //updateText(newText);
  };

  return (
    <div className="relative " style={containerStyles}>
      <textarea
        className="resize-none w-full h-full p-4 outline-none"
        placeholder={placeholder || "Start typing here..."}
        onChange={handleChange}
      />
      
    </div>
  );
};

export default  TextContainer ;
