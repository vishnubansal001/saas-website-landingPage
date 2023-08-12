import React from "react";
import crosses from "../assets/crosses.png";
import figma1 from "../assets/figma1.png";
import figma from "../assets/figma.png";
import n1 from "../assets/n1.png";
import n2 from "../assets/n2.png";
import slack from "../assets/slack.png";
import slack1 from "../assets/slack1.png";
import evernote from "../assets/evernote.png";
import evernote1 from "../assets/evernote1.png";

export default function Popular() {
  return (
    <section className="text-white pt-[6rem] flex flex-col justify-center items-center w-full h-auto">
      <div className="flex flex-col justify-center items-center gap-16">
        <div className="flex flex-col justify-center items-center gap-10">
          <div className="flex flex-col justify-center text-center items-center">
            <button
              className="bg-[#22242F] rounded-[30px] px-5 py-2 cursor-default uppercase text-white md:text-base text-sm"
              onClick={() => {}}
            >
              caption
            </button>
          </div>
          <div className="flex flex-col justify-center items-center text-center gap-2">
            <h1 className="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-semibold text-white">
              Most popular
            </h1>
            <h1 className="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-semibold text-white">
              integration apps
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center">
            <button className="text-white border-[3px] border-white px-5 py-2 rounded-[30px] text-base md:text-lg font-[450]">
              See all products
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-5 sm:grid-cols-4 ss:grid-cols-3 grid-cols-2 gap-5 ">
          <img src={n1} alt="" className="bg-[#111218] p-4 rounded-[24px]" />
          <img src={slack} alt="" className="bg-[#111218] p-4 rounded-[24px]" />
          <img
            src={crosses}
            alt=""
            className="bg-[#111218] p-4 rounded-[24px]"
          />
          <img
            src={evernote}
            alt=""
            className="bg-[#111218] p-4 rounded-[24px]"
          />
          <img src={figma} alt="" className="bg-[#111218] p-4 rounded-[24px]" />
        </div>
        <div className="grid md:grid-cols-5 sm:grid-cols-4 ss:grid-cols-3 grid-cols-2 gap-5 ">
          <img
            src={figma1}
            alt=""
            className="bg-[#111218] p-4 rounded-[24px]"
          />
          <img
            src={evernote1}
            alt=""
            className="bg-[#111218] p-4 rounded-[24px]"
          />
          <img
            src={crosses}
            alt=""
            className="bg-[#111218] p-4 rounded-[24px]"
          />
          <img
            src={slack1}
            alt=""
            className="bg-[#111218] p-4 rounded-[24px]"
          />
          <img src={n2} alt="" className="bg-[#111218] p-4 rounded-[24px]" />
        </div>
      </div>
    </section>
  );
}
