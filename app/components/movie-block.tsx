import React from 'react'
import MovieCard from './movie-card'
import { IMovie } from './movie-item'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Pagination } from "swiper/modules";

interface Props {
    movies:IMovie[];
    title:string;
}

export default function MovieBlock({movies, title}:Props) {
  return (
    <div className='w-full flex flex-col gap-5 p-5'>
        <h3 className='text-4xl'>{title}</h3>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          movies.map((movie:IMovie) => {            
           return <SwiperSlide key={movie.id}><MovieCard movie={movie} /></SwiperSlide>
          })
        }
      </Swiper>
    </div>
  )
}