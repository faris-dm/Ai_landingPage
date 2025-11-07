import React, { useState } from "react";
import Landing from "./pages/Landing";
import MainBox from "./pages/MainBox";
import SearchPage from "./pages/SearchPage";
import Slide from "./pages/Slide";
import Discover from "./pages/page_two/Discover";
import Ai_trends from "./pages/page_two/Ai_trends";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Splash from "./pages/page_two/images/splash_VideoImges.webp";
import Invideo from "./pages/page_two/images/image.png";
import CanvaSecond from "./pages/page_two/images/CanvaSecond.png";
import C from "./pages/page_two/images/Latter_C.jfif";
import oneCanva from "./pages/page_two/images/OneCanva.jpg";
import Expendia from "./pages/page_two/images/Arrow.png";

function App() {
  const [Not_open, Now_Open] = useState(false);

  const AllPhotes = [
    {
      imgSrc: Invideo,
      heading: "audio Ai by invideo",
      text: "4.o ⭐ Ai video Maker GPT generate engaging Video",
      link: " By Invideo Ai",
    },
    {
      imgSrc: oneCanva,
      heading: "Canva",
      text: "Effortlessly design anything :presentations,socal media Posts & more",
      link: "By expendia.com",
    },

    {
      imgSrc: Expendia,
      heading: "Expedia",
      text: "Bring your Plan in to life  Posts & more  Pro AI from home to mommey and co",
      link: "By Expendia.com",
    },
    {
      imgSrc: Invideo,
      heading: " Unknow Ai",
      text: "Solo Pro AI from home  to mommey and come  home becomes happy and sad",
      link: "SoloNow or Link",
    },
  ];
  return (
    <>
      <div className="">
        <Discover Toggle={() => Now_Open(true)} />
        <Slide Visblity_Of_slide={Not_open} On_Close={() => Now_Open(false)} />
        <div className="mt-[9rem] min-h-screen  ">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full md:w-9/10  max-w-6xl my-5 md:mx-[2rem]">
            {AllPhotes.map((item, index) => (
              <Ai_trends
                key={index}
                imgSrc={item.imgSrc}
                heading={item.heading}
                text={item.text}
                link={item.link}
              />
            ))}
          </div>
        </div>{" "}
        */}
        {/* <Landing Toggle={() => Now_Open(true)} />

        {/* <MainBox />
        <SearchPage /> */}
      </div>
    </>
  );
}

// Credential Manager

export default App;
