"use client";

import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { Libraries, useJsApiLoader } from "@react-google-maps/api";

const libraries = ["places", "drawing", "geometry"];

export  const defaultMapContainerStyle = { 
    width : '100%' , 
    height : '80vh' , 
    borderRadius : '15px 0px 0px 15px' , 
};

export default function Contact() {
  const { isLoaded: scriptLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API as string,
    libraries: libraries as Libraries,
  });

  if (loadError) return <p> Произошла ошибка при загрузке карт Google </p>;

  if (!scriptLoaded) return <p> Загружается скрипт карты ... </p>;

  return (
    <div className='w-full p-10 bg-[url("/images/moviesBanner.jpg")] outline-none'>
      <div className="flex justify-center gap-12">
        <form
          action=""
          className="w-xl bg-[var(--color-background)] p-5 rounded-2xl flex flex-col gap-8"
        >
          <input
            type="text"
            className="w-full p-3 rounded-xl border-2 border-solid border-gray-600"
            placeholder="Enter your firstname"
          />
          <input
            type="email"
            className="w-full p-3 rounded-xl border-2 border-solid border-gray-600"
            placeholder="Enter your email"
          />
          <textarea
            name=""
            id=""
            rows={7}
            className="w-full p-3 rounded-xl border-2 border-solid border-gray-600 resize-none"
            placeholder="Enter message"
          ></textarea>
          <input
            type="submit"
            className="w-full text-white rounded-2xl bg-[var(--standartColor)] border-2 border-solid border-[var(--standartColor)] transition-colors cursor-pointer p-3 hover:bg-transparent hover:text-[var(--standartColor)]"
            value="Send"
          />
        </form>

        <div className="flex flex-col gap-5 bg-[var(--color-background)] p-5 rounded-2xl">
          
          
          <div className="flex justify-between gap-2">
            <p className="flex items-center gap-2">
              <MdOutlineMail size={30} /> jdoe@example.com
            </p>

            <p className="flex items-center gap-2">
              <FaLocationDot size={30} /> NYC, United States
            </p>

            <p className="flex items-center gap-2">
              <FaPhone size={30} /> 000111222333
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
