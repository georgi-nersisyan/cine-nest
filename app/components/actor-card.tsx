import Image from 'next/image';
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
    <div className='w-3xs flex flex-col items-center gap-4'>
        {
           actor.profile_path?
           <Image src={img_url+actor.profile_path} alt={actor.name} width={200} height={300} className='w-full rounded-2xl object-contain' />
            :
           <Image src='/images/not-found-image.jpg' alt={actor.name} width={200} height={300} className='w-full h-full rounded-2xl object-contain' />
        }

        <h4>{actor.name}</h4>

        <b className='text-red-600'>{actor.character}</b>
    </div>
  )
}