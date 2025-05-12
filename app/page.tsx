"use client";

import { useEffect, useState } from "react";
import { api_url, request, searchUrl } from "./lib";
import MovieItem, { IMovie } from "./components/movie-item";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper/modules";
import SearchForm from "./components/search-form";
import MovieCard from "./components/movie-card";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    const popularFetch = async () => {
      const popular = await request(api_url);
      setPopular(popular.results);
    };

    popularFetch();
  }, []);

  const onFind = (title:string) => {
      const searchFetch = async () => {
        const movies = await request(searchUrl+"&query="+title);
        setMovies(movies.results);
      };
  
      searchFetch();
  }

  return (
    <div className="flex flex-col gap-10">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {popular.map((movie:IMovie) => {
          return (
            <SwiperSlide key={"movie" + movie.id}>
              <MovieItem movie={movie} />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="flex flex-col gap-10 p-10">
        <SearchForm movies={movies} onSearch={onFind} />
      </div>

      <div>
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
          movies.length >= 1 ? movies.map((movie:IMovie) => {            
           return <SwiperSlide key={movie.id}><MovieCard movie={movie} /></SwiperSlide>
          }) : popular.map((movie:IMovie) => {            
            return <SwiperSlide key={movie.id}><MovieCard movie={movie} /></SwiperSlide>
          })
        }
      </Swiper>
      </div>
    </div>
  );
}
