import React from "react";
import Ai_Logo from "./Ai_Logo";
import { House, Compass, FolderOpen, Library } from "lucide-react";

function Slide() {
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
          <div className="absolute top-0 left-70  text-red-400 cursor-pointer">
            &times;
          </div>
        </div>
        <div className=" flex items-center  gap-2 text-base   font-[500] py-2 text-left cursor-pointer">
          <House />
          <p>New Chat</p>
        </div>
        {/* 2nd */}
        <div className="font-[500] py-2 flex items-center  gap-2 text-base text-left cursor-pointer">
          <Compass />
          <p>Discover</p>
        </div>
        {/* 3rd */}
        <div className="font-[500] py-2 flex items-center  gap-2 text-base text-left cursor-pointer">
          <Library />
          <p>Library</p>
        </div>
        {/* 4th */}
        <div className="font-[500] py-2 flex items-center  gap-2 text-base text-left cursor-pointer">
          <FolderOpen />
          <p>Projects</p>
        </div>
      </div>
    </>
  );
}

export default Slide;
