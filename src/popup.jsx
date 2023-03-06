import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import namedColors from "color-name-list";
import ClipboardButton from "./components/ClipboardButton";
import "./index.css";

function Popup() {
  const [colourHex, setColourHex] = useState("#FFFFFF");
  const [rgb, setRgb] = useState("255, 255, 255");
  const [colourName, setColourName] = useState("White");
  const [copied, setCopied] = useState(false);

  function onColourChange(e) {
    const colour = e.target.value;
    setColourHex(colour);
    const r = parseInt(colour.substr(1, 2), 16);
    const g = parseInt(colour.substr(3, 2), 16);
    const b = parseInt(colour.substr(5, 2), 16);
    setRgb(`${r}, ${g}, ${b}`);
    const namedColour = namedColors.find((color) => color.hex === colour);
    if (namedColour?.name) setColourName(namedColour.name);
    else setColourName("Unknown");
  }

  function copyToClipboard(value) {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="main-container p-4">
      <div className="flex gap-4 mb-2 items-center justify-between">
        <label htmlFor="current-colour">Pick colour</label>
        <input
          type="color"
          id="current-colour"
          name="current-colour"
          value={colourHex}
          onChange={onColourChange}
        />
      </div>
      <table>
        <tbody>
          <tr>
            <th>NAME</th>
            <td>{colourName}</td>
            <td>
              <ClipboardButton
                onClickHandler={() => copyToClipboard(colourName)}
              />
            </td>
          </tr>
          <tr>
            <th>HEX</th>
            <td>{colourHex}</td>
            <td>
              <ClipboardButton
                onClickHandler={() => copyToClipboard(colourHex)}
              />
            </td>
          </tr>
          <tr>
            <th>RGB</th>
            <td>{rgb}</td>
            <td>
              <ClipboardButton
                onClickHandler={() => copyToClipboard(`rgb(${rgb})`)}
              />
            </td>
          </tr>
        </tbody>
      </table>
      {copied && (
        <div
          className="flex bg-green-100 rounded-lg p-2 mt-2 text-sm text-green-700"
          role="alert"
        >
          <svg
            className="w-5 h-5 inline mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            ></path>
          </svg>
          <p className="font-medium">Copied!</p>
        </div>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("popup")).render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);
