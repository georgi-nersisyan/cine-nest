'use client';

import React, { useEffect, useState } from "react";
import { api_key, genre, main_url, request } from "../lib";
import { IMovie } from "../components/movie-item";
import GenreButton, { IGenre } from "../components/genre-button";
import MovieBlock from "../components/movie-block";

export default function Movies() {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [genreLink, setGenreLink] = useState<string>('');

  useEffect(() => {
    const moviesFetch = async () => {
      const moviesUrl = `${main_url}/discover/movie?sort_by=popularity.desc&with_genres=${genreLink}&${api_key}`;
      const movies = await request(moviesUrl);
      setMovies(movies.results);
    };

    moviesFetch();
  }, [genreLink]);

  const choiceGenre = (name: string) => {
    setGenreLink(name);
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-center flex-wrap gap-4 p-2 sm:p-5">
        {genre.map((gen: IGenre) => {
          return (
            <GenreButton
              key={"ganre" + gen.id}
              genre={gen}
              onGenre={choiceGenre}
            />
          );
        })}

        <MovieBlock movies={movies} title="Movies" />
      </div>
    </div>
  );
}
