'use client'

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { IMovie } from "./movie-item";
import MovieCard from "./movie-card";

interface Props {
  popular: IMovie[];
  movies: IMovie[];
}

export default function SearchBlock({ popular, movies }: Props) {
  return (
      <div className="w-full flex flex-col gap-5 p-5">
        <h3 className="text-4xl">Search</h3>

        <Swiper
          slidesPerView={4}
          breakpoints={{
            1280: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 3,
            },
            560: {
              slidesPerView: 2,
            },
            320: {
              slidesPerView: 1,
            },
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {movies.length >= 1
            ? movies.map((movie: IMovie) => {
                return (
                  <SwiperSlide key={movie.id}>
                    <MovieCard movie={movie} />
                  </SwiperSlide>
                );
              })
            : popular.map((movie: IMovie) => {
                return (
                  <SwiperSlide key={movie.id}>
                    <MovieCard movie={movie} />
                  </SwiperSlide>
                );
              })}
        </Swiper>
      </div>
  );
}