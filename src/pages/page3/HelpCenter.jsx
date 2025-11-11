import React, { useState } from "react";
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
// import { div, li } from "framer-motion/client";

function HelpCenter() {
  // Items for drop down
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
          {/* sec header */}
          <div className="text-xl font-[300]">
            <h2>Help Center</h2>
          </div>
          {/* menu */}
          <div>
            <Menu />
          </div>
        </nav>

        {/* Search */}
        <h3 className="my-4 mx-2 text-lg font-[200] text-cyan-700">
          Help Center
        </h3>

        <div className="flex gap-3 items-center mx-5 border border-cyan-900 text-white p-2  rounded-3xl">
          <input
            className=" w-[90%] rounded-xl outline-none p-3"
            type="text"
            placeholder="Search"
            id=""
          />
          <Search />
        </div>

        {/* Submit Section */}
        <div className="mx-4">
          <h2 className="text-3xl font-bold mx-5 my-3">Submit a request</h2>

          <form action="">
            <label>What Can We Help you with</label>

            <div
              onClick={toggleDropdown}
              className="border rounded-xl p-3 w-[89%] m-2"
            >
              {/* FIXED: Dropdown trigger button now calls toggleDropdown */}
              <button className="flex " type="button" onClick={toggleDropdown}>
                <p
                  className={`transform  px-2 transition-transform   ${
                    isOpen ? "-rotate-90" : ""
                  }`}
                >
                  ▼
                </p>
                <p className="text-sm font-serif pt-[px] "> {selectedItem}</p>
              </button>

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
            <label>Your Email address</label>
            <div className="border border-silver p-2 m-2 w-[90%]">
              <input
                type="email"
                className="block outline-none w-[90%]"
                placeholder="enter your email "
              />
            </div>
            {/*  name */}
            <label className="mx-5">Your Name</label>
            <div className="border border-silver p-2 m-2 w-[90%]">
              <input
                type="email"
                className="block outline-none w-[90%]"
                placeholder="eg Henok Seri "
              />
            </div>
            <label className="mx-5">Subject</label>
            <div className="border border-silver p-2 m-2 w-[90%]">
              <input
                type="email"
                className="block outline-none w-[90%]"
                placeholder="Crome "
              />
            </div>
            <div className=" ">
              <p>Description</p>
              <div className="rounded-xl bg-[#fff] mb-[4rem] mx-10 w-[50%]">
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
                  className="mx-5 w-5/6 h-5/9"
                  name=""
                  cols={3}
                  rows={5}
                  id=""
                >
                  solo naser
                </textarea>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default HelpCenter;
