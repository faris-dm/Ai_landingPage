import React from "react";

function Box({ icons, text }) {
  return (
    <div className="flex  ">
      <div className="grid grid-cols-2 items-center justify-center border border-red-200">
        <div>{icons}</div>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Box;
