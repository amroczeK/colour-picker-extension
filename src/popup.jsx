import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function Popup() {
  const [currentColour, setCurrentColour] = useState("#FFF");

  const onColourChange = (e) => {
    console.log(e.target.value);
    setCurrentColour(e.target.value);
  };

  return (
    <div>
      <h1>Color Picker Chrome Extension</h1>
      <div>
        <input
          type="color"
          id="current-colour"
          name="current-colour"
          value={currentColour}
          onChange={onColourChange}
        />
        <label htmlFor="current-colour">{currentColour}</label>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("popup")).render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);
