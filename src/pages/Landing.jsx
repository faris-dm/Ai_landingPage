import React from "react";
import { Coffee, MessageCircleDashed, BotMessageSquare } from "lucide-react";

function Landing() {
  return (
    <>
      <div>
        <div className="w-full px-4 py-2">
          <nav className=" flex items-center justify-between px-3">
            <div className="flex items-center gap-2 cursor-pointer">
              <BotMessageSquare
                className="text-[#15BC78]  cursor-pointer "
                size={50}
              />
              <h3 className="font-System-ui font-bold text-[#8166F7] ">
                Cricle <label className="text-[#9E5AF7]">Ai</label>{" "}
              </h3>
            </div>

            {/*  tempo message */}
            <div>
              <MessageCircleDashed className="text-[#B0B0B0]  cursor-pointer" />
            </div>
          </nav>
          <div className="text-center py-7">
            <div>
              <h2 className="text-[#b0b0b0] text-4xl text-mono font-[1000] py-2">
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
