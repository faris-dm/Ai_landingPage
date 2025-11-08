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
      <div className="border-2 bg-transparent border-silver rounded-xl p-2 mx-5 mb-[2rem]  ">
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
    </>
  );
}
//

export default SearchPage;
