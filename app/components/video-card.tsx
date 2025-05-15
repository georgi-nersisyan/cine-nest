'use client'

import React, { useState } from 'react'

export interface IVideo {
    id:string;
    key:string;
    name:string;
}

interface Props {
    video:IVideo;
}

export default function VideoCard({video}:Props) {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    }

  return (
    <div className='flex flex-col gap-5'>
         <div className={`p-5 fixed top-1/2 left-1/2 backdrop-blur-lg -translate-x-1/2 -translate-y-1/2 ${isOpen ? "block" : "hidden"}`}>
            <iframe key={video.id} width="750px" height="450px" src={`https://www.youtube.com/embed/${video.key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <div className='flex flex-col gap-2.5 relative'>
            <div className='w-full h-full absolute top-0 left-0' onClick={handleOpen}>
            </div>
            <iframe key={video.id} width="450px" height="250px" src={`https://www.youtube.com/embed/${video.key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
            <h4>{video.name}</h4>
        </div>
    </div>
  )
}