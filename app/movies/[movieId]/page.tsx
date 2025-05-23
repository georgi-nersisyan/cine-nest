"use client";

import { IMovie } from "@/app/components/movie-item";
import { api_key, img_url, img_url_original } from "@/app/lib";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useState } from "react";
import { FaImdb } from "react-icons/fa";

import "swiper/css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { useParams } from "next/navigation";
import NotFound from "@/app/components/not-found";
import { IGenre } from "@/app/components/genre-button";
import ActorCard, { IActor } from "@/app/components/actor-card";
import VideoCard, { IVideo } from "@/app/components/video-card";
import ComponieCard, {
  ProductionCompanie,
} from "@/app/components/componie-card";

export default function MoviePage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState<IMovie | null>(null);

  const [actors, setActors] = useState<IActor[] | null>(null);
  const [videos, setVideos] = useState<IVideo[] | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedVideo, setSelectedVideo] = useState<IVideo | null>(null);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectVideo = (video: IVideo) => {
    setSelectedVideo(video);
  };

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

    fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?${api_key}`)
      .then((res) => res.json())
      .then((res) => setVideos(res.results));
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
          <Image
            src={img_url + movie.poster_path}
            alt={movie.title}
            width={600}
            height={400}
            className="w-full object-contain rounded-2xl lg:w-[600px]"
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

      <div className="w-full flex flex-col gap-7 bg-cyan-700 p-5">
        <h3 className="text-3xl">Production companies</h3>

        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          autoplay={{
            delay: 1000,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 2,
            },
            320: {
              slidesPerView: 1,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {movie.production_companies?.map((companie: ProductionCompanie) => {
            return (
              <SwiperSlide key={"companie-" + companie.id}>
                <ComponieCard companie={companie} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="flex flex-col gap-8 p-10">
        <h3 className="text-5xl">Cast</h3>

        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          breakpoints={{
            1280: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 2,
            },
            320: {
              slidesPerView: 1,
            },
          }}
          className="mySwiper"
        >
          {actors?.map((actor) => {
            return (
              <SwiperSlide key={"actor-" + actor.id}>
                <ActorCard actor={actor} />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          breakpoints={{
            
          }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {videos?.slice(0, 6)?.map((video: IVideo) => {
            return (
              <>
                <SwiperSlide key={"video-" + video.id}>
                  <VideoCard
                    video={video}
                    onOpen={handleOpen}
                    selectedVideo={handleSelectVideo}
                  />
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>

        <div
          className={`w-full p-10 fixed top-1/2 left-1/2 backdrop-blur-lg -translate-x-1/2 -translate-y-1/2 rounded-2xl z-50 ${
            isOpen ? "block" : "hidden"
          }`}
          onClick={handleOpen}
        >
          <iframe
            width="750px"
            height="700px"
            src={`https://www.youtube.com/embed/${selectedVideo?.key}`}
            className="w-full rounded-2xl"
            title="YouTube video player"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; frameborder; allowfullscreen"
          ></iframe>
        </div>
      </div>
    </div>
  );
}