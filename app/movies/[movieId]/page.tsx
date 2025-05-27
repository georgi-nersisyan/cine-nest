"use client";

import { IMovie } from "@/app/components/movie-item";
import { api_key, img_url, img_url_original } from "@/app/lib";
import React, { useEffect, useState } from "react";
import { FaImdb } from "react-icons/fa";

import { useParams } from "next/navigation";
import NotFound from "@/app/components/not-found";
import { IGenre } from "@/app/components/genre-button";
import { IActor } from "@/app/components/actor-card";
import { IVideo } from "@/app/components/video-card";
import CompaniesBlock from "@/app/components/companies-block";
import CastBlock from "@/app/components/cast-block";

export default function MoviePage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState<IMovie | null>(null);

  const [actors, setActors] = useState<IActor[] | null>(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?${api_key}`)
      .then((res) => {
        if (!res.ok) throw new Error("Movie not found");
        return res.json();
      })
      .then((res) => setMovie(res))
      .catch((err) => {
        console.log(err);
        setMovie(null);
      });
  }, [movieId]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?${api_key}`)
      .then((res) => res.json())
      .then((res) => setActors(res.cast));

  }, [movieId]);

  if (movie === null) {
    return <NotFound />;
  }

  return (
    <div className="w-full flex flex-col gap-10">
      <div
        className="w-full flex flex-col gap-3 p-3 relative bg-cover xl:p-10 xl:gap-10 lg:flex-row"
        style={{
          backgroundImage: `url(${img_url_original + movie.backdrop_path})`,
        }}
      >
        <div className="bg-black opacity-30 w-full h-full absolute top-0 left-0"></div>
        <div className="p-2 backdrop-blur-lg rounded-2xl md:p-5">
          <img
            src={img_url + movie.poster_path}
            alt={movie.title}
            className="w-full h-96 object-contain rounded-2xl lg:w-[600px]"
          />
        </div>

        <div className="flex flex-col gap-6 p-5 backdrop-blur-lg rounded-2xl lg:gap-3">
          <h4 className="text-3xl">{movie.title}</h4>

          <div className="flex flex-col justify-evenly gap-2 md:flex-row">
            <span className="flex gap-1 items-center">
              <FaImdb color="yellow" />
              <p className="flex gap-1 items-center text-gray-300">
                {movie.vote_average}.
              </p>
            </span>

            <span className="flex items-center">
              <p className="flex gap-1 items-center text-gray-300">
                Original title - {movie.original_title}.
              </p>
            </span>

            <span className="flex items-center">
              <p className="flex gap-1 items-center text-gray-300">
                Runtime -{" "}
                {movie.runtime ? Number(movie.runtime / 60).toFixed(1) : "N/A"}{" "}
                hours.
              </p>
            </span>

            <span className="flex items-center">
              <p className="flex gap-1 items-center text-gray-300">
                Votes - {movie.vote_count}.
              </p>
            </span>

            <span className="flex items-center">
              <p className="text-gray-300">Date - {movie.release_date}.</p>
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-xl">Genres</h4>

            <ul className="flex flex-wrap gap-4">
              {movie.genres.map((genre: IGenre) => {
                return (
                  <li key={genre.id} className="text-gray-400">
                    {genre.name}
                  </li>
                );
              })}
            </ul>
          </div>

          <span className="text-gray-300 text-sm">{movie.overview}</span>
        </div>
      </div>

      <CompaniesBlock companies={movie.production_companies} />
      
      <CastBlock actors={actors} />

      
    </div>
  );
}