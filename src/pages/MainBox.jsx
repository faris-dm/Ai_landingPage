import React from "react";
import Box from "./Box";
import {
  ListCheck,
  Plus,
  GitPullRequest,
  Users,
  Rocket,
  CodeXml,
} from "lucide-react";
function MainBox() {
  return (
    <>
      <div className="flex justify-center  flex-wrap mt-6 mb-[6rem] sm:mb-[6rem] md:mb-[11rem] lg:mb-[11rem]">
        <div className="grid grid-cols-2 gap-5 px-2 md:grid-cols-3 lg:grid-cols-3">
          <Box
            icons={
              <div className="bg-[#19BF6E] p-1 rounded">
                <ListCheck className="text-white" />
              </div>
            }
            text="Show my task"
          />
          <div className="">
            <Box
              icons={
                <div className="bg-[#10ACDA] p-1 rounded">
                  <Plus className="text-white" />
                </div>
              }
              text="Create New Task"
            />
          </div>
          <Box
            icons={
              <div className="bg-[#F55F29] p-1 rounded">
                <GitPullRequest className="text-white" />
                {/* #DA4CB2 */}
              </div>
            }
            text="PR Review"
          />
          <div className="md:w-90  lg:w-70 lg:ml-20">
            <Box
              icons={
                <div className="bg-[#DA4CB2] rounded p-1">
                  <Users className="text-white " />
                  {/* #F48811 */}
                </div>
              }
              text="Team Status"
            />
          </div>

          <div className="md:ml-15 lg:ml-10">
            <Box
              icons={
                <div className="bg-[#2794E9] p-1 rounded">
                  <Rocket className="text-white " />
                  {/* ##2794E9 */}
                </div>
              }
              text="Deploy Status"
            />
          </div>
          <div className="md:w-40 md:ml-6  lg:w-60  lg:mr-20 lg:ml-0">
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

export default MainBox;
