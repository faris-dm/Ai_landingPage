import React, { useState } from "react";
import Ai_Logo from "./Ai_Logo";
import { House, Compass, FolderOpen, Library } from "lucide-react";

function Slide() {
  const [NormalColor, NewColor] = useState(null);
  return (
    <>
      <div className=" fixed top-0 left-0 py-2 px-5  w-80 bg-[#0D1020] h-screen z-1">
        <div className="  pt-3 border-blue-500 pb-3  ">
          <div className="flex items-center  gap-5 py-7   border-b-3">
            {" "}
            <Ai_Logo />
            <h3>
              <label className="text-[#224cee] text-xl font-bold">Cricle</label>{" "}
              Ai
            </h3>
          </div>
          <div className="absolute top-0 left-75  text-red-400 text-xl cursor-pointer">
            &times;
          </div>
        </div>
        <div
          onClick={() => NewColor(1)}
          className={`flex items-center  rounded-xl hover:bg-cyan-950  gap-2 text-base   font-[500] py-4 px-3 text-left cursor-pointer  ${
            NormalColor === 1 ? "bg-cyan-700 rounded-xl" : ""
          }`}
        >
          <House onClick={() => NewColor(1)} className="text-[#4B7BF6]" />
          <p>New Chat</p>
        </div>
        {/* 2nd */}
        <div
          onClick={() => NewColor(2)}
          className={`font-[500] py-4 px-3 flex items-center  rounded-xl hover:bg-cyan-950  gap-2 text-base text-left cursor-pointer ${
            NormalColor === 2 ? "bg-cyan-700 rounded-xl" : ""
          }`}
        >
          <Compass className="text-[#4B7BF6]" />
          <p>Discover</p>
        </div>
        {/* 3rd */}
        <div
          onClick={() => NewColor(3)}
          className={`font-[500] py-4 flex items-center px-3  gap-2  rounded-xl hover:bg-cyan-950 text-base text-left cursor-pointer ${
            NormalColor === 3 ? "bg-cyan-700 rounded-xl" : ""
          }`}
        >
          <Library className="text-[#4B7BF6]" />
          <p>Library</p>
        </div>
        {/* 4th */}
        <div
          onClick={() => NewColor(4)}
          className={`font-[500] py-4 flex items-center px-3  gap-2  rounded-xl hover:bg-cyan-950 text-base text-left cursor-pointer ${
            NormalColor === 4 ? "bg-cyan-700 rounded-xl" : ""
          }`}
        >
          <FolderOpen className="text-[#4B7BF6] " />
          <p>Projects</p>
        </div>
      </div>
    </>
  );
}

export default Slide;
