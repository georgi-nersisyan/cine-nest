import React from 'react'
import { img_url } from '../lib';

export interface IActor {
    id:number;
    name:string;
    character:string;
    known_for_department:string;
    original_name:string;
    profile_path:string;
}

interface Props {
    actor:IActor
}

export default function ActorCard({actor}:Props) {
  return (
    <div className="w-full flex flex-col items-center gap-4 p-5 lg:w-64 xl:w-52 sm:p-0">
        {
           actor.profile_path?
           <img src={img_url+actor.profile_path} alt={actor.name} className='w-full rounded-2xl object-contain' />
            :
           <img src='/images/not-found-image.jpg' alt={actor.name} className='w-full rounded-2xl object-contain' />
        }

        <h4>{actor.name}</h4>

        <b className='text-standartColor'>{actor.character}</b>
    </div>
  )
}