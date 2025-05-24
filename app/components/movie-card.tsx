import React from "react";
import { Props } from "./movie-item";
import { img_url } from "../lib";
import { FaCirclePlay } from "react-icons/fa6";
import Link from "next/link";

export default function MovieCard({ movie }: Props) {
  return (
    <div className="w-full flex flex-col sm:w-full md:w-56 xl:w-3xs">
      <div className="relative">
        <div className="w-full h-full absolute top-0 left-0 rounded-2xl transition-all bg-black opacity-0 flex justify-center items-center hover:opacity-60">
          <Link href={`/movies/${movie.id}`} className="cursor-pointer">
            <FaCirclePlay color="red" size={45} />
          </Link>
        </div>
        {movie.poster_path ? (
          <img
            src={img_url + movie.poster_path}
            alt=""
            className="w-full h-[400px] rounded-2xl object-cover"
          />
        ) : (
          <img
            src="/images/not-found-image.jpg"
            alt={movie.title}
            className="w-full h-[400px] rounded-2xl object-cover"
          />
        )}
      </div>

      <div className="w-full flex flex-col justify-center items-center gap-4">
        <h4>{movie.title}</h4>

        <b className="text-red-700">{movie.release_date}</b>
      </div>
    </div>
  );
}
