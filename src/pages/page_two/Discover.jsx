import React from "react";
import { Search, ListFilter } from "lucide-react";
import SearchPage from "../SearchPage";

function Discover({ Toggle }) {
  return (
    <>
      <div>
        <nav className="  mb-[6rem]">
          <div className="flex items-center justify-between m-5">
            <ListFilter onClick={Toggle} className="cursor-pointer" />
            <div> ...</div>
          </div>
        </nav>
        <div className="text-center px-5 mb-5 ">
          <h2 className="font-bold text-3xl pb-3 font-poppins">Cricle Ai</h2>
          <p>
            Discover and create custom versions of ChatGPT that combine
            instructions, extra knowledge, and any combination of skills.
          </p>
        </div>
        <div className="flex items-center mx-4 border border-cyan-750 p-2 rounded-xl">
          <textarea
            className="w-full resize-none outline-none -hidden my-2 rounded-lg box-border min-h-[42px] max-h-40 "
            placeholder="Search Cricle Ai"
          ></textarea>
          <Search pointer-pointer className="mb-3" />
        </div>
      </div>
    </>
  );
}

export default Discover;
