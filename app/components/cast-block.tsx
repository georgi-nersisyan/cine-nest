import React from 'react'
import ActorCard, { IActor } from './actor-card';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

interface Props {
    movieId:number;
}

export default function CastBlock({movieId}:Props) {
  return (
    <div className="flex flex-col gap-8 p-10">
        <h3 className="text-5xl">Cast</h3>

        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          breakpoints={{
            1280: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 2,
            },
            320: {
              slidesPerView: 1,
            },
          }}
          className="mySwiper"
        >
          {actors?.map((actor:IActor) => {
            return (
              <SwiperSlide key={"actor-" + actor.id}>
                <ActorCard actor={actor} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

  )
}