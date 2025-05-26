'use client'

import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import MovieItem, { IMovie } from './movie-item';

interface Props {
    popular:IMovie[];
}

export default function PopularBlock({popular}:Props) {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
              {popular.map((movie: IMovie) => {
                return (
                  <SwiperSlide key={"movie" + movie.id}>
                    <MovieItem movie={movie} />
                  </SwiperSlide>
                );
              })}
            </Swiper> 
    </div>
  )
}
