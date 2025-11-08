import React from "react";

function Ai_trends({ imgSrc, heading, text, link }) {
  return (
    <div className="flex justify-center items-center min-h-16  ">
      {" "}
      {/* ✅ Full centering */}
      <div className="bg-[#0D1020] rounded-2xl p-5 gap-4 w-full max-w-lg mx-auto">
        {/* Circular image */}
        <div className="flex items-center gap-2">
          <div className="my-5 mx-3 w-20 h-20 rounded-full overflow-hidden bg-white flex items-center justify-center">
            <img
              src={imgSrc}
              alt={heading}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text content */}
          <div className="text-white">
            <h3 className="sm:text-sm lg:text-lg md:text-normal font-semibold">
              {heading}
            </h3>
            <p className="text-sm sm:text-xs text-gray-300 mt-1">{text}</p>
            <a
              href="#"
              className="text-xs text-blue-400 hover:underline mt-2 inline-block"
            >
              {link}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ai_trends;
