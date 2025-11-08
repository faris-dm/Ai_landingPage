import React, { useEffect, useRef } from "react";
import { Search, ListFilter, Container } from "lucide-react";
import SearchPage from "../SearchPage";
import { table } from "framer-motion/client";

function Discover({ Toggle }) {
  const textValue = useRef(null);
  useEffect(() => {
    const Container_divs = document.querySelectorAll(".All div");
    Container_divs.forEach((div) => {
      div.classList.add(
        "px-7",
        "py-2",
        "cursor-pointer",
        "rounded-xl",
        "bg-[#0D1020]",
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

  //  for thr input
  const Resize = () => {
    const Table = textValue.current;
    if (!Table) return;
    Table.style.height = "auto";
    Table.style.height = table.scrollHeight + "px";
  };
  useEffect(() => {
    Resize();
  }, []);

  return (
    <>
      <div className="bg-[#151734] mt-[10rem] z-1">
        <nav className="px-5 pt-[1rem] mb-[2rem]  bg-[#151734]   fixed top-0 left-0 w-full  z-1">
          <div className="flex items-center justify-between m-auto ">
            <ListFilter onClick={Toggle} className="cursor-pointer" />
            <div className=""> ...</div>
          </div>
        </nav>
        <div className="flex  items-center justify-center   md:mt-[10rem]  ">
          <div className="fixed   md:w-[90%] bg-[#151734]  mt-[10rem] md:mt-[7rem]">
            <div className="text-center px-5 mb-5 ">
              <h2 className="font-bold text-3xl pb-3 font-poppins md:mt-[1rem]">
                Cricle Ai
              </h2>
              <p className="text-normal font-system-ui font-[200] px-5 mx-[3rem]">
                Discover and create custom versions of ChatGPT
                <p className="hidden sm:block">
                  that combine instructions, extra knowledge, and any
                  combination of skills.
                </p>
              </p>
            </div>
            <div className="flex items-center  mx-10 sm:mx-12 md:mx-6 border border-cyan-750 p-2 rounded-xl">
              <textarea
                name=""
                id=""
                ref={textValue}
                onInput={Resize}
                className="w-full resize-none outline-none -hidden my-2 rounded-lg box-border min-h-[42px] max-h-40 "
                placeholder="Search Cricle Ai"
              ></textarea>
              <Search pointer-pointer className="mb-3" />
            </div>

            {/*  list of items */}
            <div className="   All grid grid-cols-3 md:grid grid-cols-2 lg:flex items-center justify-center my-4 gap-4  mx-3  px-7  md:mb-[1rem] ">
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
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Discover;
