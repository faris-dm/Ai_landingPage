import React from "react";
import Landing from "./pages/Landing";
import MainBox from "./pages/MainBox";
import SearchPage from "./pages/SearchPage";
import Slide from "./pages/Slide";

function App() {
  return (
    <>
      <div className="">
        <Slide />
        <Landing />
        <MainBox />
        <SearchPage />
      </div>
    </>
  );
}

// Credential Manager

export default App;
