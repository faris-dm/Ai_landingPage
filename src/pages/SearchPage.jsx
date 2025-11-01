import React from "react";
import { Search, Image, Mic, Send, Zap, Paperclip } from "lucide-react";

function SearchPage() {
  return (
    <>
      <div>
        <div className=" text-center  relative  w-5/6 md:80 mt-[3rem] bg-[#1B1C2D]">
          <input
            className="w-8/9 px-4 pt-15 pb-5  border border-silver-200 rounded-xl"
            type="text"
            placeholder="Ask anything . . . . ."
          />
          <div className="flex items-center gap-2 absolute  bottom-16 left-20">
            <div className="flex items-center gap-1   bg-[#363654] rounded  px-2 py-1 mt-2 ">
              <Search size={12} />
              <p className="text-[12px] text-silver-500">Search</p>
            </div>

            <div className="flex items-center gap-1   bg-[#363654] rounded  px-2 py-1 mt-2 bg-[#]">
              <Zap size={12} />
              <p className="text-[12px]">Research</p>
            </div>
          </div>
        </div>

        {/*  left side */}
        <div className="flex items-center gap-2">
          <Paperclip />
          <Image />
          <Mic />
          <Send />
        </div>
      </div>
    </>
  );
}

export default SearchPage;
