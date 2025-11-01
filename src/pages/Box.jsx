import React from "react";

function Box({ icons, text }) {
  return (
    <div className="flex justify-center ">
      <div className="flex items-center gap-3 w-60 px-2 py-4 rounded-xl  bg-[#31344F] text-[#fff]  ">
        <div className=" rounded-xl">{icons}</div>
        <p className="text-xs font-bold">{text}</p>
      </div>
    </div>
  );
}

export default Box;
