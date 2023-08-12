import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import { products } from "../database/data";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import bg from "../assets/bg.png";

export default function Products() {
  const [_, setInit] = useState();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <>
      <section className="text-white relative flex flex-col justify-center z-[100]">
        <div className="flex flex-col w-full px-8 xl:px-10 py-5 gap-10">
          <div className="flex md:flex-row flex-col justify-start items-center md:justify-between gap-5 md:items-end">
            <div className="flex flex-col justify-start items-start gap-1">
              <h1 className="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-semibold text-white">
                Choose from over 10+
              </h1>
              <h1 className="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-semibold text-white">
                cutting-edge products
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center">
              <button className="text-white border-[3px] border-white px-5 py-2 rounded-[30px] text-base md:text-lg font-[450]">
                See all products
              </button>
            </div>
          </div>
          <div>
            <Swiper
              modules={[Navigation, Pagination, EffectFade]}
              slidesPerView={5}
              spaceBetween={20}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onInit={() => {
                setInit(true);
              }}
              breakpoints={{
                260: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                300: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                520: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
              // loop={true}
            >
              {products?.map((item, index) => (
                <SwiperSlide key={index}>
                  <img src={item.img} alt={`img/${item.img}`} />
                </SwiperSlide>
              ))}
              <div className="text-white flex flex-row pt-4 md:pl-20">
                <button ref={prevRef}>
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 6.70498C14.61 6.31498 13.98 6.31498 13.59 6.70498L8.99999 11.295C8.60999 11.685 8.60999 12.315 8.99999 12.705L13.59 17.295C13.98 17.685 14.61 17.685 15 17.295C15.39 16.905 15.39 16.275 15 15.885L11.12 11.995L15 8.11498C15.38 7.72498 15.38 7.08498 15 6.70498Z"
                      fill="#fff"
                    />
                  </svg>
                </button>
                <button ref={nextRef}>
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.99999 6.71063C8.60999 7.10063 8.60999 7.73063 8.99999 8.12063L12.88 12.0006L8.99999 15.8806C8.60999 16.2706 8.60999 16.9006 8.99999 17.2906C9.38999 17.6806 10.02 17.6806 10.41 17.2906L15 12.7006C15.39 12.3106 15.39 11.6806 15 11.2906L10.41 6.70063C10.03 6.32063 9.38999 6.32063 8.99999 6.71063Z"
                      fill="#fff"
                    />
                  </svg>
                </button>
              </div>
            </Swiper>
          </div>
        </div>
        {/* <div className={`absolute left-0 top-[-10rem]`}>
          <img src={bg} alt="" />
        </div> */}
      </section>
    </>
  );
}
