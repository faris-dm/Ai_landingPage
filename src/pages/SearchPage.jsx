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
import { useRef, useEffect } from "react";

function SearchPage() {
  const textareaRef = useRef(null);

  // Auto-resize helper: sets height to scrollHeight so it grows with content
  const autoResize = () => {
    const ta = textareaRef.current;
    if (!ta) return;
    ta.style.height = "auto"; // reset to recalc
    ta.style.height = ta.scrollHeight + "px";
  };

  // Ensure textarea has correct size on mount
  useEffect(() => {
    autoResize();
  }, []);
  return (
    <>
      <div className="border-2 bg-transparent border-silver rounded-xl p-2 mx-5 mb-[1rem]  ">
        {/* Top controls (Search / ReSearch) */}
        <div className="flex items-center gap-4 ml-4 ">
          <div className="flex items-center gap-1 bg-[#363654] rounded-lg cursor-pointer px-2 py-1 mt-2">
            <Search size={12} />
            <p className="text-[12px] text-silver-500">Search</p>
          </div>

          <div className="flex items-center gap-1 bg-[#363654] rounded-lg px-2  mt-2">
            <Zap size={12} />
            <p className="text-[12px] text-silver-500">ReSearch</p>
          </div>
        </div>

        {/* Chat input area */}
        <div className="flex items-end justify-between px-4 py-2 gap-3">
          {/* Textarea container - make this flex-1 so it takes remaining width */}
          <div className="flex-1 min-w-0">
            <textarea
              ref={textareaRef}
              rows={1}
              onInput={autoResize}
              placeholder="Ask anything..."
              className="w-full resize-none overflow-hidden p-3 rounded-lg border-b border-gray-200 box-border min-h-[42px] max-h-40"
            />
          </div>

          {/* Right-side controls (icons/buttons) */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="p-1 rounded hover:cursor-pointer "
              aria-label="attach"
            >
              <Paperclip size={15} />
            </button>

            <button
              type="button"
              className="p-1 rounded hover:cursor-pointer"
              aria-label="record"
            >
              <Mic size={15} />
            </button>

            <button
              type="button"
              className="bg-[#303030] rounded p-2 text-white hover:opacity-90"
              aria-label="send"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* px-4 pt-10  pl-3 pr-2 resize-none   border bg-transparent border-silver-200 rounded-xl  w-8/9  */}
      {/* <div className="border-2  border-silver rounded-xl p-2 mx-5">
        <div>
          <div className="flex item-center gap-4 ml-4">
            <div className="flex items-center gap-1   bg-[#363654] rounded-lg cursor-pointer  px-2 py-1 mt-2 ">
              <Search size={12} />
              <p className="text-[12px] text-silver-500">Search</p>{" "}
            </div>
            <div className="flex items-center gap-1 bg-[#363654] rounded-lg  px-2 py-1 mt-2">
              <Zap className="" size={12} />
              <p className="text-[12px] text-silver-500">ReSearch</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between px-4 py-6">
          <textarea w={50} placeholder=" Ask anything" id=""></textarea>
          <div className="flex items-center gap-3">
            <Paperclip size={15} />
            <Mic size={15} />
            <Send className="bg-[#303030] rounded  p-1" size={25} />
          </div>
        </div>
      </div> */}
    </>
  );
}
//

export default SearchPage;

//   <div>
//     <div className=" text-center  relative   mt-[5rem]  lg:mt-[10rem] mb-3">
//       <textarea className=" " placeholder="Ask anything . . . . ." />
//       <div className="flex items-center gap-2 absolute  bottom-15 left-12 sm:left-15 md:left-20 lg:left-25">
//         <div className="flex items-center gap-1   bg-[#363654] rounded  px-2 py-1 mt-2 ">
//           <Search size={12} />
//           <p className="text-[12px] text-silver-500">Search</p>
//         </div>

//         <div className="flex items-center gap-1   bg-[#363654] rounded  px-2 py-1 mt-2 bg-[#]">
//           <Zap size={12} />
//           <p className="text-[12px]">Research</p>
//         </div>
//       </div>
//       <div className="flex items-center gap-2 absolute  bottom-4 right-12 sm:right-15 md:right-20 lg:right-25">
//         <Paperclip size={15} />
//         <Mic size={15} />
//         <AudioLines className="bg-[#303030] rounded  p-1" size={25} />
//       </div>

//       {/*  voice */}
//     </div>

//     {/*  left side */}
//   </div>;
