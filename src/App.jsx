import React from "react";
import Landing from "./pages/Landing";
import Box from "./pages/Box";
import {
  Coffee,
  MessageCircleDashed,
  BotMessageSquare,
  Heart,
  Star,
  ListCheck,
} from "lucide-react";

function App() {
  return (
    <>
      <div className="">
        <Landing />
        <Box icons={<ListCheck />} text="Show my task" />
        <Box icons={<Star />} text="My  Total Star" />
      </div>
    </>
  );
}

// Credential Manager

export default App;
