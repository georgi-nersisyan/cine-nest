"use client";

import React, { useEffect, useState } from "react";
import VideoCard, { IVideo } from "./video-card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { api_key } from "../lib";

interface Props {
    movieId:number;
}

export default function VideosBlock({movieId}:Props) {
  const [videos, setVideos] = useState<IVideo[] | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedVideo, setSelectedVideo] = useState<IVideo | null>(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?${api_key}`)
      .then((res) => res.json())
      .then((res) => setVideos(res.results));
  }, [movieId]);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectVideo = (video: IVideo) => {
    setSelectedVideo(video);
  };
  return (
    <div className="flex flex-col gap-8 p-10">
      <h3 className="text-5xl">Videos</h3>

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
        breakpoints={{}}
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
  );
}
