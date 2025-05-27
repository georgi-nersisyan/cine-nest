'use client';

import React from 'react'
import ComponieCard, { ProductionCompanie } from './componie-card';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Autoplay } from "swiper/modules";

interface Props {
    companies:ProductionCompanie[]
}

export default function CompaniesBlock({companies}:Props) {
  return (
    <div className="w-full flex flex-col gap-7 bg-cyan-700 p-5">
        <h3 className="text-3xl">Production companies</h3>

        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          autoplay={{
            delay: 1000,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 2,
            },
            320: {
              slidesPerView: 1,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {companies?.map((companie: ProductionCompanie) => {
            return (
              <SwiperSlide key={"companie-" + companie.id}>
                <ComponieCard companie={companie} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
  )
}
