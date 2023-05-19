import React, { useState } from "react";

const TextContainer = ({ width, height, placeholder }) => {
  const [text, setText] = useState("");

  const containerStyles = {
    width: width || "80%",
    height: height || "1000px",
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="relative " style={containerStyles}>
      <textarea
        className="resize-none w-full h-full p-4 outline-none"
        placeholder={placeholder || "Start typing here..."}
        value={text}
        onChange={handleTextChange}
      />
    </div>
  );
};

export default TextContainer;
