import React from "react";

function Box({ icons, text }) {
  return (
    <div className="  flex justify-center ">
      <div className=" flex items-center gap-2 w-40 p-5 rounded border border-red-200">
        <div className="">{icons}</div>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Box;
