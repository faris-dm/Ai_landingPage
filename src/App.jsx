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
import { div } from "motion/react-client";

function App() {
  return (
    <>
      <div className="">
        <Landing />
        <div className="flex justify-center  flex-wrap p-3 ">
          <div className="grid grid-cols-3 gap-5   ">
            <Box
              icons={
                <div className="bg-[#19BF6E] p-1 rounded">
                  <ListCheck className="text-white" />
                </div>
              }
              text="Show my task"
            />
            <Box
              icons={
                <div className="bg-[#10ACDA] p-1 rounded">
                  <Plus className="text-white" />
                </div>
              }
              text="Create New Task"
            />
            <Box
              icons={
                <div className="bg-[#F55F29] p-1 rounded">
                  <GitPullRequest className="text-white" />
                  {/* #DA4CB2 */}
                </div>
              }
              text="PR Review"
            />
            <Box
              icons={
                <div className="bg-[#DA4CB2] rounded p-1">
                  <Users className="text-white " />
                  {/* #F48811 */}
                </div>
              }
              text="Team Status"
            />

            <Box
              icons={
                <div className="bg-[#2794E9] p-1 rounded">
                  <Rocket className="text-white " />
                  {/* ##2794E9 */}
                </div>
              }
              text="Deploy Status"
            />
            <Box
              icons={
                <div className="bg-[#2794E9] p-1 rounded">
                  <CodeXml className="text-white  " />
                  {/* ##2794E9 */}
                </div>
              }
              text="Code"
            />
          </div>
        </div>
      </div>
    </>
  );
}

// Credential Manager

export default App;
