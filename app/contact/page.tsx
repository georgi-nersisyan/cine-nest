"use client";

import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import {
  GoogleMap,
  Marker,
} from "@react-google-maps/api";

export const defaultMapContainerStyle = {
  width: "100%",
  height: "80vh",
  borderRadius: "15px",
};

export default function Contact() {
  return (
    <div className='w-full p-10 bg-[url("/images/moviesBanner.jpg")]'>
      <div className="flex flex-col lg:flex-row justify-center gap-12">
        <form
          action=""
          className="w-full lg:w-[500px] bg-[var(--color-background)] p-5 rounded-2xl flex flex-col gap-8"
        >
          <input
            type="text"
            className="w-full p-3 rounded-xl border-2 border-gray-600"
            placeholder="Enter your firstname"
          />
          <input
            type="email"
            className="w-full p-3 rounded-xl border-2 border-gray-600"
            placeholder="Enter your email"
          />
          <textarea
            rows={7}
            className="w-full p-3 rounded-xl border-2 border-gray-600 resize-none"
            placeholder="Enter message"
          ></textarea>
          <input
            type="submit"
            className="w-full text-white rounded-2xl bg-[var(--standartColor)] border-2 border-[var(--standartColor)] transition-colors cursor-pointer p-3 hover:bg-transparent hover:text-[var(--standartColor)]"
            value="Send"
          />
        </form>

        <div className="w-full lg:w-[600px] flex flex-col gap-5 bg-[var(--color-background)] p-5 rounded-2xl">
           <GoogleMap
          mapContainerStyle={defaultMapContainerStyle}
          center={{ lat: 40.7128, lng: -74.006 }}
          zoom={10}
        >
          <Marker position={{ lat: 40.7128, lng: -74.006 }} />
        </GoogleMap>
          <div className="w-full flex flex-col gap-3">
            <p className="flex items-center gap-2">
              <MdOutlineMail size={24} /> jdoe@example.com
            </p>
            <p className="flex items-center gap-2">
              <FaLocationDot size={24} /> NYC, United States
            </p>
            <p className="flex items-center gap-2">
              <FaPhone size={24} /> 000111222333
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
