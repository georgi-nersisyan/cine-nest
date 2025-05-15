import React from 'react'

export interface IGenre {
    id:number;
    name:string;
}

interface Props {
    genre:IGenre;
    onGenre:(id:number)=>void;
}

export default function GenreButton({genre, onGenre}:Props) {
    const choiceGenre = () => {
        onGenre(genre.id);
    }

  return (
    <button className='w-3xs bg-violet-500 p-2.5 border-none rounded-2xl cursor-pointer' onClick={choiceGenre}>{genre.name}</button>
  )
}