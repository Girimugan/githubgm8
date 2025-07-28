import React, { useContext } from "react";
import { StyleContext } from "./StyleContext";

function ComponentThree() {
  const { style, setStyle } = useContext(StyleContext);

  const updateStyle = () => {
    setStyle({
      ...style,
      color: "orange",
      backgroundColor: "green",
    });
  };

  return (
    <div style={style}>
      <p>Component Three</p>
      <button onClick={updateStyle}>Click Me</button>
    </div>
  );
}

export default ComponentThree;