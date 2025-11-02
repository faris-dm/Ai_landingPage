import React from "react";
import Ai_Logo from "./Ai_Logo";

function Slide() {
  return (
    <>
      <div className="py-4 px-5  w-5/10 bg-silver-600 h-screen">
        <div className="flex items-center  gap-10">
          <div className="flex items-center justify-between gap-5 py-7">
            {" "}
            <Ai_Logo />
            <h3>Cricle Ai</h3>
          </div>
          &times;
        </div>
        <div>
          <img src="" alt="" />
          <p>New Chat</p>
        </div>
        {/* 2nd */}
        <div>
          <img src="" alt="" />
          <p>Discover</p>
        </div>
        {/* 3rd */}
        <div>
          <img src="" alt="" />
          <p>Library</p>
        </div>
        {/* 4th */}
        <div>
          <img src="" alt="" />
          <p>Projects</p>
        </div>
      </div>
    </>
  );
}

export default Slide;
