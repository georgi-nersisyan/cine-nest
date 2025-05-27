'use client'

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { IMovie } from "./movie-item";
import MovieCard from "./movie-card";
import { request, searchUrl } from "../lib";
import SearchForm from "./search-form";

interface Props {
  popular: IMovie[];
}

export default function SearchBlock({ popular }: Props) { 
  const [movies, setMovies] = useState<IMovie[]>(popular);

  const onFind = (title: string) => {
     const searchFetch = async () => {
       const data = await request(searchUrl + "&query=" + title);
       setMovies(data.results);
     };
 
     searchFetch();
   };

    return (
     <div className="flex flex-col gap-16">
         <SearchForm movies={popular} onSearch={onFind} />

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
          {
            movies?.map((movie: IMovie) => {
                return (
                  <SwiperSlide key={movie.id}>
                    <MovieCard movie={movie} />
                  </SwiperSlide>
                );
              })
            }
        </Swiper>
      </div>
     </div>
  );
}