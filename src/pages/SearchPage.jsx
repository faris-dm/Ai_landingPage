import React from "react";
import {
  Search,
  AudioLines,
  Image,
  Mic,
  Send,
  Zap,
  Paperclip,
} from "lucide-react";

function SearchPage() {
  return (
    <>
      <div>
        <div className=" text-center  relative   mt-[5rem]  mb-2">
          <input
            className=" px-4 pt-15 pb-4   border bg-[#1B1C2D] border-silver-200 rounded-xl w-8/9 "
            type="text"
            placeholder="Ask anything . . . . ."
          />
          <div className="flex items-center gap-2 absolute  bottom-15 left-12 sm:left-15">
            <div className="flex items-center gap-1   bg-[#363654] rounded  px-2 py-1 mt-2 ">
              <Search size={12} />
              <p className="text-[12px] text-silver-500">Search</p>
            </div>

            <div className="flex items-center gap-1   bg-[#363654] rounded  px-2 py-1 mt-2 bg-[#]">
              <Zap size={12} />
              <p className="text-[12px]">Research</p>
            </div>
          </div>
          <div className="flex items-center gap-2 absolute  bottom-4 right-12 sm:right-15">
            <Paperclip size={15} />
            <Mic size={15} />
            <AudioLines className="bg-[#303030] rounded  p-1" size={25} />
          </div>

          {/*  voice */}
        </div>

        {/*  left side */}
      </div>
    </>
  );
}

export default SearchPage;
