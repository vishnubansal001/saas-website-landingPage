import React from "react";
import leaf from "../assets/leaf.png";
import { CgProfile } from "react-icons/cg";
import { customers } from "../database/data";

export default function Sayings() {
  return (
    <section className="bg-black h-full text-white flex flex-col justify-center items-center">
      <div className="flex flex-col justify-start items-start gap-10 h-auto px-6 xl:px-10 w-full">
        <div className="flex flex-col justify-start items-start gap-6 w-full">
          <div className="flex lg:flex-row flex-col justify-between items-start lg:items-end w-full gap-4">
            <h1 className="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-semibold text-white">
              <span>Here's what our </span>
              <span className="text-[#2DDB81]">customer</span>
              <p>has to says</p>
            </h1>
            <div className="flex flex-row w-auto lg:w-[35%] justify-center items-center gap-4">
              <img src={leaf} alt="" className="w-[30px] h-[30px]" />
              <p className="md:text-base text-sm">
                {"["}short description goes in here{"]"} lorem ipsum is a
                placeholder text to demonstrate.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <button className="capitalize text-base md:text-lg font-[450] border-2 rounded-[30px] px-6 py-2 border-[#fff] text-[#3AFF99]">
              Read customer stories
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 gap-x-14 items-center justify-center">
          {customers?.map((item, index) => (
            <div
              className={`${
                item.dark ? "bg-[#131317]" : "bg-[#22242F]"
              } text-white border-none rounded-[30px] cursor-pointer px-8 py-9 flex flex-col gap-4`}
              key={index}
            >
              <h1 className="lg:text-2xl md:text-xl text-lg">{item.heading}</h1>
              <p className="md:w-[90%] lg:text-lg md:text-base text-sm">
                {item.about}
              </p>
              <div className="flex flex-row justify-start items-center gap-4">
                <CgProfile size={40} />
                <div className="flex flex-col justify-start items-start md:gap-0 gap-1">
                  <h1 className="lg:text-lg md:text-base text-sm capitalize">
                    {item.name}
                  </h1>
                  <p className="lg:text-base text-sm text-[#9C9EAB]">
                    {item.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
