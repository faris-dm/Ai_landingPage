import React from "react";

function Box({ icons, text }) {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex items-center gap-3  w-60  mx-3 sm:w-60 md:w-55 lg:w-80 px-2 py-3  rounded-xl  bg-[#31344F] text-[#fff]  ">
          <div className="rounded-xl">{icons}</div>
          <p className="text-xs font-bold">{text}</p>
        </div>
      </div>
    </>
  );
}

export default Box;
