import React, { useContext } from "react";
import { StyleContext } from "./StyleContext";

function ComponentTwo() {
  const { style, setStyle } = useContext(StyleContext);

  const updateStyle = () => {
    setStyle({
      ...style,
      color: "red",
      backgroundColor: "blue",
    });
  };

  return (
    <div style={style}>
      <p>Component Two</p>
      <button onClick={updateStyle}>Click Me</button>
    </div>
  );
}

export default ComponentTwo;