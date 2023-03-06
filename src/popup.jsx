import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Popup() {
  const [currentColour, setCurrentColour] = useState("#FFF");

  const onColourChange = (e) => {
    console.log(e.target.value);
    setCurrentColour(e.target.value);
  };

  return (
    <div className="bg-red-600 w-full h-full">
      <h1>Color Picker Chrome Extension</h1>
      <div>
        <input
          type="color"
          id="current-colour"
          name="current-colour"
          value={currentColour}
          onChange={onColourChange}
        />
        <label htmlFor="current-colour" className=" text-red-700">
          {currentColour}
        </label>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("popup")).render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);
