import React from "react";
import dashboard from "../assets/dashboard.png";

export default function Best() {
  return (
    <section className="text-white pt-[6rem] flex flex-col justify-center items-center w-full h-auto gap-20 pb-[6rem]">
      <div className="flex flex-row justify-between items-center gap-3 w-[80%] px-6 xl:px-10 py-5">
        <div className="md:w-[60%] flex flex-col justify-start items-start gap-6">
          <div className="flex ss:flex-row flex-col lg:gap-8 gap-6 justify-start items-center">
            <button
              className="bg-[#22242F] rounded-[30px] px-5 py-2 cursor-default uppercase text-white md:text-base text-sm"
              onClick={() => {}}
            >
              caption
            </button>
          </div>
          <div className="flex flex-col justify-start items-start gap-1">
            <h1 className="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-semibold text-white">
              The best in the
            </h1>
            <h1 className="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-semibold text-white">
              class product for
            </h1>
            <h1 className="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-semibold text-white">
              you today!
            </h1>
          </div>
          <div className="flex flex-col gap-1 md:text-lg text-base text-[#9C9EAB]">
            <p>
              This is a placeholder for your testimonials and what your client
              has to say, put them here and make sure its 100% true and
              meaningful.
            </p>
          </div>
          <div className="flex ss:flex-row flex-col lg:gap-8 gap-6 justify-start items-center">
            <button className="bg-[#28A263] px-6 py-2 md:text-lg text-base rounded-[14px] capitalize font-semibold cursor-pointer">
              get a free demo
            </button>
            <div className="flex flex-col gap-1 items-start justify-start pt-0 text-[#28A263] pl-7 border-l-2 border-[#28A263] capitalize">
              <p>start work efficiently with</p>
              <p>UIFry SaaS product</p>
            </div>
          </div>
        </div>
        <div className="md:w-[80%] md:block hidden"></div>
      </div>
      <div className="w-[90%] mx-auto">
        <img src={dashboard} alt="" />
      </div>
    </section>
  );
}
