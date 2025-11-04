import React, { useState } from "react";
import Landing from "./pages/Landing";
import MainBox from "./pages/MainBox";
import SearchPage from "./pages/SearchPage";
import Slide from "./pages/Slide";
import Discover from "./pages/page_two/Discover";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const [Not_open, Now_Open] = useState(false);
  return (
    <>
      <div className="">
        <Discover Toggle={() => Now_Open(true)} />
        <Slide Visblity_Of_slide={Not_open} On_Close={() => Now_Open(false)} />
        {/* <Landing Toggle={() => Now_Open(true)} /> */}

        {/* <MainBox />
        <SearchPage /> */}
      </div>
    </>
  );
}

// Credential Manager

export default App;
