import React from "react";
import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";

function ClipboardButton({ onClickHandler }) {
  return (
    <button onClick={onClickHandler}>
      <ClipboardDocumentIcon className="ml-2 h-6 w-6 text-slate-400 hover:text-slate-500" />
    </button>
  );
}

export default ClipboardButton;
