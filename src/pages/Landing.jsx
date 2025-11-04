import React from "react";
import {
  Coffee,
  MessageCircleDashed,
  BotMessageSquare,
  ListFilter,
} from "lucide-react";
import Ai_Logo from "./Ai_Logo";

function Landing({ Toggle }) {
  return (
    <>
      <div>
        <ListFilter
          onClick={Toggle}
          className="absolute   top-5 left-2 text-[#15BC78]  cursor-pointer "
        />
        <div className="w-full px-4 py-2 ">
          <nav className=" flex items-center ml-5 justify-between px-3 ">
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="z-0 gap-2">
                {" "}
                <Ai_Logo className="z-0 " />{" "}
              </div>
              <h3 className="font-Poppins font-[700] text-[#8166F7] ">
                Cricle <label className="text-[#9E5AF7]">Ai</label>{" "}
              </h3>
            </div>

            {/*  tempo message  good font1000/text-size-4xl*/}
            <div>
              <MessageCircleDashed className="text-[#B0B0B0]  cursor-pointer" />
            </div>
          </nav>
          <div className="text-center py-7">
            <div>
              <h2 className="text-[#b0b0b0] text-2xl text-mono font-[700] sm:font-[800] md:font-[1000] py-2 lg:font[1000] lg:text-4xl">
                Good Afternoon, Solo
              </h2>
              <p className="text-[#b0b0b0] py-1 pb-3 font-sans">
                How can I help you today?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
