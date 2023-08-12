import React, { useState } from "react";
import logo from "../assets/mainLogo.png";
import search from "../assets/search.png";

export default function NavBar() {
  const [showDropdown, setShowDropdown] = useState({
    about: false,
    features: false,
    resources: false,
    company: false,
  });
  const handleHover = (name) => {
    setShowDropdown((prevState) => ({
      ...prevState,
      [name]: true,
    }));
  };

  const handleLeave = (name) => {
    setShowDropdown((prevState) => ({
      ...prevState,
      [name]: false,
    }));
  };
  return (
    <header className="bg-black z-[1000] fixed w-full h-auto hidden lg:flex flex-col justify-center items-center text-white border-b-[1px] border-white select-none">
      <nav className="flex flex-row justify-between w-full py-5 px-6 xl:px-10">
        <div className="flex flex-row justify-between items-center gap-14 xl:gap-20">
          <div>
            <img src={logo} alt="img/logo" className="cursor-pointer" />
          </div>
          <ul className="flex flex-row gap-8">
            <li
              onMouseEnter={() => {
                handleHover("about");
              }}
              onMouseLeave={() => {
                handleLeave("about");
              }}
              className="text-lg cursor-pointer capitalize font-[450] flex justify-center items-center gap-1"
            >
              About UIFry ?{" "}
              <svg
                width="34"
                height="33"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.52899 10.5576L12 14.0436L15.471 10.5576"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {showDropdown.about && (
                <div className="absolute left-0 mt-2 bg-white p-2 shadow-lg">
                  <ul className="space-y-2">
                    <li className="text-gray-800">About Item 1</li>
                    <li className="text-gray-800">About Item 2</li>
                    <li className="text-gray-800">About Item 3</li>
                  </ul>
                </div>
              )}
            </li>
            <li
              onMouseEnter={() => {
                handleHover("features");
              }}
              onMouseLeave={() => {
                handleLeave("features");
              }}
              className="text-lg cursor-pointer capitalize font-[450] flex justify-center items-center gap-1"
            >
              Features
              <svg
                width="34"
                height="33"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.52899 10.5576L12 14.0436L15.471 10.5576"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {showDropdown.features && (
                <div className="absolute left-0 mt-2 bg-white p-2 shadow-lg">
                  <ul className="space-y-2">
                    <li className="text-gray-800">Features Item 1</li>
                    <li className="text-gray-800">Features Item 2</li>
                    <li className="text-gray-800">Features Item 3</li>
                  </ul>
                </div>
              )}
            </li>
            <li
              onMouseEnter={() => {
                handleHover("resources");
              }}
              onMouseLeave={() => {
                handleLeave("resources");
              }}
              className="text-lg cursor-pointer capitalize font-[450] flex justify-center items-center gap-1"
            >
              Resources
              <svg
                width="34"
                height="33"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.52899 10.5576L12 14.0436L15.471 10.5576"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {showDropdown.resources && (
                <div className="absolute left-0 mt-2 bg-white p-2 shadow-lg">
                  <ul className="space-y-2">
                    <li className="text-gray-800">Resources Item 1</li>
                    <li className="text-gray-800">Resources Item 2</li>
                    <li className="text-gray-800">Resources Item 3</li>
                  </ul>
                </div>
              )}
            </li>
            <li
              onMouseEnter={() => {
                handleHover("company");
              }}
              onMouseLeave={() => {
                handleLeave("company");
              }}
              className="text-lg cursor-pointer capitalize font-[450] flex justify-center items-center gap-1"
            >
              Company
              <svg
                width="34"
                height="33"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.52899 10.5576L12 14.0436L15.471 10.5576"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {showDropdown.company && (
                <div className="absolute left-0 mt-2 bg-white p-2 shadow-lg">
                  <ul className="space-y-2">
                    <li className="text-gray-800">Company Item 1</li>
                    <li className="text-gray-800">Company Item 2</li>
                    <li className="text-gray-800">Company Item 3</li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>
        <div className="flex flex-row justify-center items-center gap-1">
          <div className="flex flex-row justify-center items-center gap-2 xl:gap-4">
            <button className="capitalize text-lg font-[450] border-2 rounded-[14px] px-4 py-2 border-[#C0F497] text-[#C0F497]">
              get demo
            </button>
            <button className="capitalize text-lg font-[450] border-2 rounded-[14px] px-4 py-2 border-[#000000] text-[#fff]">
              contact sales
            </button>
          </div>
          <img src={search} alt="" />
        </div>
      </nav>
    </header>
  );
}
