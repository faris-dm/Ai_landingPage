import React, { useState } from "react";
import Landing from "./pages/Landing";
import MainBox from "./pages/MainBox";
import SearchPage from "./pages/SearchPage";
import Slide from "./pages/Slide";
import Discover from "./pages/page_two/Discover";
import Ai_trends from "./pages/page_two/Ai_trends";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Image_One from "./pages/page_two/images/image.png";

const AllImages = [image];
// {img,heading,text,link})

function App() {
  const [Not_open, Now_Open] = useState(false);
  return (
    <>
      <div className="">
        <Ai_trends Seller={AllImages} s />
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
