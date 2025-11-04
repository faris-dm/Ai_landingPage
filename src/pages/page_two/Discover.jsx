import React, { useEffect } from "react";
import { Search, ListFilter, Container } from "lucide-react";
import SearchPage from "../SearchPage";

function Discover({ Toggle }) {
  useEffect(() => {
    const Container_divs = document.querySelectorAll(".All div");
    Container_divs.forEach((div) => {
      div.classList.add(
        "px-7",
        "py-2",

        "bg-[#212121]",
        "text-[15px]",
        "text-[#b0b0b0]",
        "rounded",
        "text-center",
        "font-semibold",
        "transition"
      );
    }),
      [];
  });

  return (
    <>
      <div>
        <nav className="px-5 pt-[1rem] mb-[6rem]">
          <div className="flex  items-center justify-between m-auto">
            <ListFilter onClick={Toggle} className="cursor-pointer" />
            <div> ...</div>
          </div>
        </nav>
        <div className="flex items-center justify-center  ">
          <div className="fixed mt-[20rem] md:mt-[7rem]">
            <div className="text-center px-5 mb-5 ">
              <h2 className="font-bold text-3xl pb-3 font-poppins">
                Cricle Ai
              </h2>
              <p className="text-normal font-system-ui font-[200] px-5 mx-[3rem]">
                Discover and create custom versions of ChatGPT that combine
                instructions, extra knowledge, and any combination of skills.
              </p>
            </div>
            <div className="flex items-center  mx-10 sm:mx-12 md:mx-6 border border-cyan-750 p-2 rounded-xl">
              <textarea
                className="w-full resize-none outline-none -hidden my-2 rounded-lg box-border min-h-[42px] max-h-40 "
                placeholder="Search Cricle Ai"
              ></textarea>
              <Search pointer-pointer className="mb-3" />
            </div>

            {/*  list of items */}
            <div className="  All grid grid-cols-3 md:grid grid-cols-2 lg:flex items-center justify-center my-4 gap-4  mx-3  px-7">
              <div>
                <p>Top Visted</p>
              </div>
              <div>Writing</div>
              <div>Productivity</div>
              <div>
                <p>Research </p>
              </div>
              <div>Education</div>
              <div>Codeing</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Discover;
