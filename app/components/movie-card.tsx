import Image from "next/image";
import React from "react";
import { Props } from "./movie-item";
import { img_url } from "../lib";
import { FaCirclePlay } from "react-icons/fa6";
import Link from "next/link";

export default function MovieCard({ movie }: Props) {
  return (
    <div className="w-3xs flex flex-col">
      <div className="relative">
        <div className="w-full h-full absolute top-0 left-0 rounded-2xl transition-all bg-black opacity-0 flex justify-center items-center hover:opacity-60">
          <Link href={`/movies/${movie.id}`} className="cursor-pointer">
            <FaCirclePlay color="red" size={45} />
          </Link>
        </div>
        {movie.poster_path ? (
          <Image
            src={img_url + movie.poster_path}
            alt=""
            width={100}
            height={200}
            className="w-full rounded-2xl object-contain"
          />
        ) : (
          <Image
            src="/images/not-found-image.jpg"
            alt={movie.title}
            width={200}
            height={300}
            className="w-full h-full rounded-2xl object-contain"
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
