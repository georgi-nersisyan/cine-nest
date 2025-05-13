"use client";

import { IMovie } from "@/app/components/movie-item";
import { api_key, img_url, img_url_original } from "@/app/lib";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaImdb } from "react-icons/fa";

export default function page() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState<IMovie>();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?${api_key}`)
      .then((res) => res.json())
      .then((res) => setMovie(res));
  }, [movieId]);

  if (!movie) {
    return notFound();
  }

  return (
    <div
      className="w-full flex justify-between"
      style={{
        backgroundImage: `url(${img_url_original + movie.backdrop_path})`,
      }}
    >
      <div className="p-5 backdrop-blur-lg rounded-2xl">
        <Image
          src={img_url + movie.poster_path}
          alt={movie.title}
          width={300}
          height={500}
          className="object-contain rounded-2xl"
        />
      </div>

      <div className="flex flex-col gap-3">
        <h4 className="text-3xl">{movie.title}</h4>

        <span className="text-gray-200 text-sm">{movie.overview}</span>

        <div className="flex justify-evenly">
          <span className="flex gap-1 items-center">
            <FaImdb color="yellow" />
            <p className="flex gap-1 items-center text-gray-300">
              {movie.vote_average}
            </p>
          </span>

          <span className="flex items-center">
            <p className="flex gap-1 items-center text-gray-300">
              language - {movie.original_language.toUpperCase()}
            </p>
          </span>

          <span className="flex items-center">
            <p className="flex gap-1 items-center text-gray-300">
              votes - {movie.vote_count}
            </p>
          </span>

          <span className="flex items-center">
            <p className="text-gray-300">{movie.release_date}</p>
          </span>
        </div>
      </div>
    </div>
  );
}
