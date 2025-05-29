"use client";

import React, { useState } from "react";
import VideoCard, { IVideo } from "./video-card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

interface Props {
    videos:IVideo[];
}

export default function VideosBlock({videos}:Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedVideo, setSelectedVideo] = useState<IVideo | null>(null);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectVideo = (video: IVideo) => {
    setSelectedVideo(video);
  };
  return (
    <div className="flex flex-col gap-8 p-2 sm:p-10">
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
        breakpoints={{
          1200:{
            slidesPerView:3
          },
          900:{
            slidesPerView:2
          },
          0: {
            slidesPerView:1
          }
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
        className={`w-full h-full p-8 fixed top-1/2 left-1/2 backdrop-blur-lg -translate-x-1/2 -translate-y-1/2 z-50 flex justify-center items-center ${
          isOpen ? "block" : "hidden"
        } lg:p-24`}
        onClick={handleOpen}
      >
        <iframe
          src={`https://www.youtube.com/embed/${selectedVideo?.key}`}
          className="w-full h-72 rounded-2xl sm:h-[400px] lg:h-[550px]"
          title="YouTube video player"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; frameborder; allowfullscreen"
        ></iframe>
      </div>
    </div>
  );
}
