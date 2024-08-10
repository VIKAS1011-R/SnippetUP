"use client"
import React, { useRef, useState } from "react";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { useGlobalContext } from "@/ContextApi";

export default function SwiperSelection() {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();
  return (
    <div
      className={`${
        darkMode[1].isSelected ? "bg-slate-900 text-white" : "bg-white"
      } p-3 border border-purple-600 rounded-lg flex gap-5`}
      
    >
      <div className="overflow-x-auto  ">
        <Swiper
          slidesPerView="auto"
          spaceBetween={10}
          freeMode={true}
          className="mySwiper"
          modules={[FreeMode]}
        >
            <SwiperSlide className="bg-purple-600 p-1 rounded-md text-white w-20" >
                All
            </SwiperSlide>
            <SwiperSlide className="text-slate-400">
                Javascript exercise
            </SwiperSlide>
            <SwiperSlide className="text-slate-400">
                react exercise
            </SwiperSlide>
            <SwiperSlide className="text-slate-400">
                react exercise
            </SwiperSlide>
            <SwiperSlide className="text-slate-400">
                react exercise
            </SwiperSlide>
            <SwiperSlide className="text-slate-400">
                react exercise
            </SwiperSlide>
            <SwiperSlide className="text-slate-400">
                react exercise
            </SwiperSlide>
            <SwiperSlide className="text-slate-400">
                react exercise
            </SwiperSlide>
            <SwiperSlide className="text-slate-400">
                react exercise
            </SwiperSlide>
                
        </Swiper>
        </div>
        <button className="bg-purple-600 p-1 rounded-md px-3 flex gap-1 items-center text-white">
            <AddOutlinedIcon sx={{ fontSize: 18 }} />
            <div className="hidden md:flex">Tag</div>
        </button>
      
    </div>
  );
}

