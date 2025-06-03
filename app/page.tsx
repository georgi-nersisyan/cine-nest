// "use client";

// import { useEffect, useState } from "react";
import { api_key, api_url, main_url } from "./lib";
import MovieBlock from "./components/movie-block";
import SearchBlock from "./components/search-block";
import PopularBlock from "./components/popular-block";
import { IMovie } from "./components/movie-item";

export default async function Home() {
  const [popularRes, historyRes, comedyRes] = await Promise.all([
  fetch(api_url).then(res => res.json()),
  fetch(`${main_url}/discover/movie?sort_by=popularity.desc&with_genres=36&${api_key}`).then(res => res.json()),
  fetch(`${main_url}/discover/movie?sort_by=popularity.desc&with_genres=35&${api_key}`).then(res => res.json()),
]);


  const popular: IMovie[] = popularRes.results;
  const history: IMovie[] = historyRes.results;
  const comedy: IMovie[] = comedyRes.results;
  const movies: IMovie[] = [];

  // const [movies, setMovies] = useState([]);
  // const [popular, setPopular] = useState([]);

  // const [history, setHistory] = useState([]);
  // const [comedy, setComedy] = useState([]);

  // useEffect(() => {
  //   const popularFetch = async () => {
  //     const popular = await request(api_url);
  //     setPopular(popular.results);
  //   };

  //   popularFetch();
  // }, []);

  // useEffect(() => {
  //   const genreFetch = async () => {
  //     const historyUrl = `${main_url}/discover/movie?sort_by=popularity.desc&with_genres=36&${api_key}`;
  //     const history = await request(historyUrl);
  //     setHistory(history.results);

  //     const comedyUrl = `${main_url}/discover/movie?sort_by=popularity.desc&with_genres=35&${api_key}`;
  //     const comedy = await request(comedyUrl);
  //     setComedy(comedy.results);
  //   };

  //   genreFetch();
  // }, []);

  return (
    <div className="flex flex-col gap-10">
      <PopularBlock popular={popular} />

      <div className="flex flex-col gap-10 p-5">
        <SearchBlock popular={popular} />

        <MovieBlock movies={history} title="History" />

        <MovieBlock movies={comedy} title="Comedy" />
      </div>
    </div>
  );
}