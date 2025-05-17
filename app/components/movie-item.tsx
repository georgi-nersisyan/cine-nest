import React from "react";
import { img_url, img_url_original } from "../lib";
import Image from "next/image";
import { FaImdb } from "react-icons/fa";
import Link from "next/link";
import { IGenre } from "./genre-button";

export interface ProductionCompanie {
  id:number;
  logo_path:string;
  name:string;
  origin_country:string;
}

export interface IMovie {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  original_language: string;
  runtime: number;
  genres: IGenre[];
  production_companies: ProductionCompanie[];
}

export interface Props {
  movie: IMovie;
}

export default function MovieItem({ movie }: Props) {
  return (
    <div
      className="w-full h-full bg-center bg-cover p-14 flex gap-24 items-center"
      style={{
        backgroundImage: `url(${img_url_original + movie.backdrop_path})`,
      }}
    >
      <div className="w-1/2 flex flex-col gap-4 justify-start">
        <h3 className="text-6xl">{movie.title}</h3>

        <div className="flex justify-evenly">
          <span className="flex gap-1 items-center">
            <FaImdb color="yellow" />
            <p
              className="flex gap-1 items-center text-gray-300">
              {movie.vote_average}
            </p>
          </span>

          <span className="flex items-center">
              <p className="flex gap-1 items-center text-gray-300">
                runtime - {movie.runtime ? Number(movie.runtime / 60).toFixed(1) : "N/A"} hours
              </p>
          </span>

          <span className="flex items-center">
            <p
              className="flex gap-1 items-center text-gray-300">
               votes - {movie.vote_count} 
            </p>
          </span>

          <span className="flex items-center">
            <p
              className="text-gray-300">
              date - {movie.release_date}
            </p>
          </span>
        </div>

        <span className="text-gray-500">{movie.overview}</span>

        <Link href={`/movies/${movie.id}`}><button className="w-52 p-2.5 bg-standartColor flex self-start justify-center rounded-2xl border-2 cursor-pointer transition-all border-red-600 border-solid hover:bg-transparent hover:text-standartColor">Read more</button></Link>
      </div>

      <div className="w-1/2 h-[650px] p-6 backdrop-blur-lg rounded-2xl">
        {
            movie.poster_path ? <Image
            src={img_url + movie.poster_path}
            alt={movie.title}
            width={300}
            height={200}
            className="w-full h-full object-cover rounded-2xl"
          />
          :
          <Image
            src="/not-found-image.jpg"
            alt={movie.title}
            width={300}
            height={200}
            className="w-full h-full object-cover rounded-2xl"
          />
        }
      </div>
    </div>
  );
}