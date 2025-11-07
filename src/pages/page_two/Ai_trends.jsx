import React from "react";
import ImageOne from "./images/image.png";
import { icons } from "lucide-react";
function Ai_trends({ imgSrc, heading, text, link }) {
  return (
    <>
      <div className="">
        <div className=" mx-8 md:mx-30 sm:mx-30 my-5   lg:grid grid-cols-2  lg:mx-25">
          <div className="bg-black mx-3 flex gap-4 px-2 py-3 rounded-xl my-2">
            <div className="w-15  h-15  md:w-30 md:h-30 rounded-full object-cover bg-white">
              <img
                width={60}
                height={60}
                className="md:h-30 md:w-30"
                src={imgSrc}
                alt=""
              />
            </div>
            <div className="">
              <h3 className="text-[#F7F5F3] font-[500]">{heading}</h3>
              <p className="text-[12px] text-[#F7F5F3]">{text}</p>
              <a className="text-xs " href="">
                {" "}
                {link}
              </a>
            </div>
          </div>
          {/* 3nd page  */}

          {/* <div className="bg-black mx-3 flex gap-4 px-2 py-3 rounded-xl my-2">
            <div className="w-15  h-15  md:w-30 md:h-30 rounded-full object-cover bg-white">
              <img
                width={60}
                height={60}
                className="md:h-30 md:w-30"
                src={ImageOne}
                alt=""
              />
            </div>
            <div className="">
              <h3 className="text-[#F7F5F3] font-[500]">{heading}</h3>
              <p className="text-[12px] text-[#F7F5F3]"> {text}</p>
              <a className="text-xs " href="">
                {link}
              </a>
            </div>
          </div> */}
          {/* thered pages */}

          {/*  fourth pages */}
        </div>
      </div>
    </>
  );
}
//src/pages/page_two/images/splash_VideoImges.webp

export default Ai_trends;
