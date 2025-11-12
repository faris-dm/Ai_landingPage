import React, { useRef, useState } from "react";
import Ai_Logo from "../Ai_Logo";
import {
  Menu,
  Search,
  Bold,
  Italic,
  Option,
  List,
  Terminal,
  Link,
} from "lucide-react";
import { li } from "framer-motion/client";

function HelpCenter({ Toggle }) {
  // Items for drop down

  const fileInput = useRef(null);
  const FileClicked = () => {
    fileInput.current.click();
  };

  const showFile = (event) => {
    const file = event.target.files[0];
    if (file) {
      alert("selcted file" + file.name);
    }
  };

  const Items = [
    "I need help with  my Message",
    "I need help with my app",
    "Report a bug",
    "Report copyright information  ",
  ];

  // State for dropdown
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(
    "I need an Assistane with my Account"
  );

  //FUNCTION: Toggle dropdown open/close
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // FUNCTION: Handle item selection
  const handleTheSlectedOne = (item) => {
    setSelectedItem(item); // Update selected item
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <>
      <div>
        <nav className="flex items-center justify-between mx-5 py-2 border-b py-3">
          <div className="flex items-center gap-4 py-1">
            <Ai_Logo />
            <h2 className="font-[600] text-xl">Cricle</h2>
          </div>

          <div>{/*  end this section */}</div>
          {/* sec header */}
          <div className="text-xl font-[300]">
            <h2>Help Center</h2>
          </div>
          {/* menu */}
          <div className="">
            <Menu onClick={Toggle} className=" sm:block md:hidden lg:hidden" />
            <div className="flex hidden sm:hidden md:block lg:block">
              <div className="flex items-center gap-2 text-sm text-underline">
                <p className="text-blue-400 ">Report a bug</p>
                <p className="text-blue-600 ">Contact US</p>
                <p className="text-blue-200 ">Poe ai</p>
              </div>
            </div>
          </div>
        </nav>

        {/* Search */}

        <div className=" md:flex lg:flex  items-start justify-between  m-4">
          <div className=" flex-1 ">
            <div className="md:flex items-start justify-between">
              <div className="flex-1">
                <h3 className=" active:border-cyan-700   my-4 mx-2 text-lg font-[200] text-cyan-700">
                  Help Center
                </h3>
              </div>

              <div className="flex-1">
                <div className="flex mt-4 gap-3 items-center mx-9 border border-cyan-900 text-white p-2  rounded-3xl lg:w-[60%]  ">
                  <input
                    className=" w-[90%] rounded-xl outline-none p-3"
                    type="text"
                    placeholder="Search"
                    id=""
                  />
                  <Search />
                </div>
              </div>
            </div>

            {/*  part two */}
            <div className="md:flex items-start justify-center">
              <div className="flex-1">
                <div className="mx-4">
                  <h2 className="text-3xl font-bold m-6">Submit a request</h2>
                </div>
                <form action="">
                  <label className="text-normal font-[100] font-serif text-[#b0b0b0] cursor-pointer m-2">
                    What Can We Help you with
                  </label>

                  <div
                    onClick={toggleDropdown}
                    className="border bg-transparent rounded-xl p-3 m-3  w-[90%] md:w-[150%] lg:w-[90%]  m-2"
                  >
                    {/* FIXED: Dropdown trigger button now calls toggleDropdown */}

                    <div className="mb-6">
                      <button
                        className="flex "
                        type="button"
                        onClick={toggleDropdown}
                      >
                        <p
                          className={`transform  px-2 transition-transform   ${
                            isOpen ? "-rotate-90" : ""
                          }`}
                        >
                          ▼
                        </p>
                        <p className="text-sm font-serif pt-[px] ">
                          {" "}
                          {selectedItem}
                        </p>
                      </button>

                      {/*  si open down */}
                      {/* DROPDOWN MENU - Only shows when isOpen is true */}
                      {isOpen && (
                        <div className="">
                          <ul>
                            {Items.map((item, index) => (
                              <li
                                className="border p-2  my-2 rounded-xl p-3"
                                key={index}
                              >
                                <button
                                  className="text-sm font-serif "
                                  type="button"
                                  onClick={() => handleTheSlectedOne(item)}
                                >
                                  {item}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                  <label className="text-normal font-[100] font-serif  my-2 text-[#b0b0b0] cursor-pointer my-2">
                    Your Email address
                  </label>
                  <div className=" border-b  border-silver p-2 m-4 w-[90%] md:w-[150%] lg:w-[90%]">
                    <input
                      type="email"
                      className="block outline-none w-[90%]"
                      placeholder=" Abc@gmail.com "
                    />
                  </div>
                  {/*  name */}
                  <label className="text-normal font-[100] font-serif text-[#b0b0b0] cursor-pointer m-2">
                    Your Name
                  </label>
                  <div className="border-b border-silver p-2 m-4  w-[90%] md:w-[150%] lg:w-[90%]">
                    <input
                      type="email"
                      className="block outline-none w-[90%]"
                      placeholder="eg Henok Seri "
                    />
                  </div>
                  <label className="text-normal font-[100] font-serif text-[#b0b0b0] cursor-pointer m-2">
                    Subject
                  </label>
                  <div className="border-b border-silver p-2  mb-[3rem]  w-[90%] md:w-[150%] lg:w-[90%] text-[#fefefe] ">
                    <input
                      type="text"
                      className="block outline-none [#fefefe] w-[90%]"
                      placeholder="Crome "
                    />
                  </div>
                  <div className=" text-normal font-[100] font-serif text-[#fefefe] cursor-pointer m-2">
                    <p>Description</p>
                    <div className="rounded-xl bg-[#dedede] mb-[4rem]  w-[90%] md:w-[150%]  lg:w-[90%] mx-3 my-2 p-3 h-[70vh] md:h-[40vh] lg:h-[50vh]">
                      <div className="flex justify-center gap-2 py-4  ">
                        <p className="text-[#b0b0b0] font-bold">paragraph</p>
                        <p className=" rounded-sm p-1">
                          {" "}
                          <Bold size={20} className="text-black font-[900]" />
                        </p>
                        <p className=" rounded-sm p-1">
                          {" "}
                          <Italic size={20} className="text-black" />{" "}
                        </p>
                        <p className=" rounded-sm p-1">
                          <Terminal size={20} className="text-black" />
                        </p>
                        <p className=" rounded-sm p-1">
                          <Terminal size={20} className="text-black" />
                        </p>
                        <p className=" rounded-sm p-1">
                          <Link size={20} className="text-black" />
                        </p>
                        <p className=" rounded-sm p-1">
                          {" "}
                          <List size={20} className="text-black" />
                        </p>
                        <p className="rounded-sm p-1">
                          <Option size={20} className="text-black" />
                        </p>
                      </div>
                      <textarea
                        className="outline-none hover:outline outline-silver  text-[#000]  text-lg font-serif cursor-pointer rounded  resize-none  p-3 h-[50%] w-[90%]"
                        name=""
                        id=""
                      >
                        solo naser
                      </textarea>
                    </div>
                    <h2>Attachments(optional)</h2>
                    <div className="mb-[3rem]">
                      <button
                        className="  my-2 mx-5 px-6 rounded-lg hover:scale-98 py-2 bg-green-900"
                        onClick={FileClicked}
                      >
                        Drop File
                      </button>
                      <input
                        style={{ display: "none" }}
                        type="file"
                        onChange={showFile}
                        ref={fileInput}
                      />
                    </div>
                  </div>
                  <button
                    className=" w-[70%] p-2 mb-8 rounded-xl text-lg  font-mono bg-cyan-900 hover:bg-cyan-700 "
                    type="submit"
                  >
                    {" "}
                    Submit
                  </button>
                </form>

                {/*  frist elements */}
              </div>
              <div className="flex-1">{/* empty elements */}</div>
            </div>
          </div>

          {/* lower Part */}
        </div>

        {/* Submit Section */}
      </div>
    </>
  );
}

export default HelpCenter;
