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
  Plus,
  GitPullRequest,
  Users,
  Rocket,
  CodeXml,
} from "lucide-react";

function App() {
  return (
    <>
      <div className="">
        <Landing />
        <div className="flex justify-center gap-2  flex-wrap p-3 ">
          <div className="grid grid-cols-3 gap-4 ">
            <Box icons={<ListCheck />} text="Show my task" />
            <Box icons={<Plus />} text="My  Total Star" />
            <Box icons={<GitPullRequest />} text="My  Total Star" />
            <Box icons={<Users />} text="My  Total Star" />
            <Box icons={<Rocket />} text="My  Total Star" />
            <Box icons={<CodeXml />} text="My  Total Star" />
          </div>
        </div>
      </div>
    </>
  );
}

// Credential Manager

export default App;
