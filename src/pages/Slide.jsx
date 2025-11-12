import React, { useState } from "react";
import Ai_Logo from "./Ai_Logo";
import { House, Compass, FolderOpen, Library } from "lucide-react";
import { Link } from "react-router-dom";
import HelpCenter from "./page3/HelpCenter";

function Slide({ Visblity_Of_slide, On_Close }) {
  const [NormalColor, NewColor] = useState(null);
  const [clicked, setClicked] = useState(null);
  return (
    <>
      <div
        className={`fixed top-0  z-4 left-0 py-2 px-5  w-90 bg-[#0D1020] h-screen z-1 shadow-lg transform  duration-500 ease-in-out  ${
          Visblity_Of_slide
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        } `}
      >
        <div className="  pt-3 border-blue-500 pb-3  ">
          <div className="flex items-center  gap-5 py-7   border-b-3">
            {" "}
            <Ai_Logo />
            <h3>
              <label className="text-[#224cee] text-xl font-bold">Cricle</label>{" "}
              Ai
            </h3>
          </div>
          <div
            onClick={On_Close}
            className="absolute top-0 left-85 z-1  text-red-400 text-xl cursor-pointer"
          >
            &times;
          </div>
        </div>
        <Link
          to="/"
          onClick={() => NewColor(1)}
          className={`flex items-center  rounded-xl hover:bg-cyan-950  my-3 gap-2 text-base   font-[500] py-4 px-3 text-left cursor-pointer  ${
            NormalColor === 1 ? "bg-cyan-700 rounded-xl" : ""
          }`}
        >
          <House onClick={() => NewColor(1)} className="text-[#4B7BF6]" />
          <p>New Chat</p>
        </Link>
        {/* 2nd */}
        <Link
          to="Discover"
          onClick={() => NewColor(2)}
          className={`font-[500] py-4 px-3 flex items-center my-3  rounded-xl hover:bg-cyan-950  gap-2 text-base text-left cursor-pointer ${
            NormalColor === 2 ? "bg-cyan-700 rounded-xl" : ""
          }`}
        >
          <Compass className="text-[#4B7BF6]" />
          <p>Discover</p>
        </Link>
        {/* 3rd */}
        <div
          onClick={() => NewColor(3)}
          className={`font-[500] py-4 flex items-center px-3 my-3  gap-2  rounded-xl hover:bg-cyan-950 text-base text-left cursor-pointer ${
            NormalColor === 3 ? "bg-cyan-700 rounded-xl" : ""
          }`}
        >
          <Library className="text-[#4B7BF6]" />
          <p>Library</p>
        </div>
        {/* 4th */}
        <Link
          to="/HelpCenter"
          onClick={() => NewColor(4)}
          className={`font-[500] py-4 flex items-center px-3 my-3  gap-2  rounded-xl hover:bg-cyan-950 text-base text-left cursor-pointer ${
            NormalColor === 4 ? "bg-cyan-700 rounded-xl" : ""
          }`}
        >
          <FolderOpen className="text-[#4B7BF6] " />
          <p>Help Center</p>
        </Link>
      </div>
    </>
  );
}

export default Slide;
