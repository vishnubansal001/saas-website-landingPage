import React from "react";
import herobg from "../assets/herobg.png";
import stars from "../assets/stars.png";
import lopo from "../assets/lopo.png";
import logoi from "../assets/logoi.png";
import logoi2 from "../assets/logoi2.png";

export default function Hero() {
  return (
    <section className="bg-black text-white pt-[6rem] flex flex-col justify-center items-center w-full h-auto">
      <div className="flex md:flex-row flex-col w-full px-6 xl:px-10 py-5 gap-6">
        <div className="md:w-[70%] flex flex-col justify-center items-start gap-8">
          <div className="flex flex-col justify-start items-start gap-6 w-auto">
            <div className="flex ss:flex-row flex-col gap-2 items-start justify-start">
              <img src={stars} alt="" />
              <p className="text-[#808080] md:text-base text-sm">
                Based on <span className="text-[#fff]">10k+</span> reviews
              </p>
            </div>
            <div className="flex flex-col justify-start items-start gap-2">
              <h1 className="lg:text-6xl md:text-4xl sm:text-3xl text-2xl font-semibold capitalize">
                seamless solution
              </h1>
              <h1 className="lg:text-6xl md:text-4xl sm:text-3xl text-2xl font-semibold capitalize">
                with our magic!
              </h1>
            </div>
            <div className="flex flex-col gap-1 md:text-lg text-base">
              <p>
                UIFry is the project management platform that aims for teams to{" "}
              </p>
              <p>achieve an efficient dream management</p>
            </div>
            <div className="flex ss:flex-row flex-col lg:gap-8 gap-6 justify-start items-center">
              <div className="flex flex-col gap-1 items-start justify-start pt-0 text-[#28A263] pl-7 border-l-2 border-[#28A263] capitalize">
                <p>start work efficiently with</p>
                <p>UIFry SaaS product</p>
              </div>
              <button className="bg-[#28A263] px-6 py-2 md:text-lg text-base rounded-[14px] capitalize font-semibold cursor-pointer">
                get a free demo
              </button>
            </div>
          </div>
          <div className="grid ss:grid-cols-3 xs:grid-cols-2 grid-cols-1 justify-start items-center lg:gap-10 gap-5">
            <img src={lopo} alt="" className="w-32" />
            <img src={logoi} alt="" className="w-32" />
            <img src={logoi2} alt="" className="w-32" />
          </div>
        </div>
        <div className="w-auto flex md:justify-center md:items-end">
          <img src={herobg} alt="" />
        </div>
      </div>
    </section>
  );
}
