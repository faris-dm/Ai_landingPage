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
      imgSrc: Invideo,
      heading: " Expandia",
      text: "Bring Your Idea To life",
      link: "IBy expendia.com",
    },
    {
      imgSrc: Invideo,
      heading: " Unknow Ai",
      text: "Solo Pro AI from home  to mommey and come  home becomes happy and sad",
      link: "SoloNow or Link",
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
        {/*  2nd pages */}
        <div className="">
          {AllPhotes.map((items, index) => (
            <Ai_trends
              key={index}
              imgSrc={items.imgSrc}
              heading={items.heading}
              text={items.text}
              link={items.link}
            />
          ))}
        </div>

        {/* <Discover Toggle={() => Now_Open(true)} />
        <Slide Visblity_Of_slide={Not_open} On_Close={() => Now_Open(false)} /> */}
        {/* <Landing Toggle={() => Now_Open(true)} /> */}

        {/* <MainBox />
        <SearchPage /> */}
      </div>
    </>
  );
}

// Credential Manager

export default App;
