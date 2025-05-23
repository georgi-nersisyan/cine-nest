"use client";

import { useEffect, useState } from "react";
import { api_key, api_url, getMoviesByGenre, main_url, request, searchUrl } from "./lib";
import MovieItem, { IMovie } from "./components/movie-item";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper/modules";
import SearchForm from "./components/search-form";
import MovieCard from "./components/movie-card";
import MovieBlock from "./components/movie-block";

  //     const popularRes = await fetch(`${api_url}?api_key=${process.env.TMDB_API_KEY}`, {
  //   cache: "no-store",
  // });
  // const historyRes = await fetch(
  //   `${main_url}/discover/movie?sort_by=popularity.desc&with_genres=36&api_key=${process.env.TMDB_API_KEY}`
  // );
  // const comedyRes = await fetch(
  //   `${main_url}/discover/movie?sort_by=popularity.desc&with_genres=35&api_key=${process.env.TMDB_API_KEY}`
  // );


  // const popular: IMovie[] = await popularRes.json();
  // const history: IMovie[] = await historyRes.json();
  // const comedy: IMovie[] = await comedyRes.json();
  // const movies: IMovie[] = [];

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [popular, setPopular] = useState([]);

   const [history, setHistory] = useState([]);
  const [comedy, setComedy] = useState([]);

  useEffect(() => {
    const popularFetch = async () => {
      const popular = await request(api_url);
      setPopular(popular.results);
    };

    popularFetch();
  }, []);

  useEffect(() => {
    const genreFetch = async () => {
      const historyUrl = `${main_url}/discover/movie?sort_by=popularity.desc&with_genres=36&${api_key}`;
      const history = await request(historyUrl);
      setHistory(history.results);

      const comedyUrl = `${main_url}/discover/movie?sort_by=popularity.desc&with_genres=35&${api_key}`;
      const comedy = await request(comedyUrl);
      setComedy(comedy.results);
    };

    genreFetch();
  }, []);

  const onFind = (title: string) => {
    const searchFetch = async () => {
      const movies = await request(searchUrl + "&query=" + title);
      setMovies(movies.results);
    };

    searchFetch();
  };

  return (
    <div className="flex flex-col gap-10">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {popular.map((movie: IMovie) => {
          return (
            <SwiperSlide key={"movie" + movie.id}>
              <MovieItem movie={movie} />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="flex flex-col gap-10 p-3 sm:p-10">
        <SearchForm movies={popular} onSearch={onFind} />
      </div>

      <div className="flex flex-col gap-10 p-5">
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
            modules={[Pagination]}
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

        <MovieBlock movies={history} title="History" />

        <MovieBlock movies={comedy} title="Comedy" />
      </div>
    </div>
  );
}