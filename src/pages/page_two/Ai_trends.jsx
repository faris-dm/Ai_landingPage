import React from "react";
import ImageOne from "./images/image.png";
function Ai_trends({ Seller }) {
  return (
    <>
      <div className=" p-3  flex items-center justify-between mx-auto   bg-black   p-7">
        <div className=" mx-auto  w-20 h-20 rounded-full object-cover bg-white">
          <img
            width={100}
            height={100}
            className=""
            sizes={20}
            src={ImageOne}
            alt=""
          />
        </div>
        <div className="mx-auto">
          <h3>Video Ai by Invideo</h3>
          <p> 4 🐱‍💻 Ai video maker using sor 2</p>
          <a href=""> By Invideo Ai</a>
        </div>
      </div>
    </>
  );
}
//src/pages/page_two/images/splash_VideoImges.webp

export default Ai_trends;
