'use client'

import React, { useState } from 'react'
import { IMovie } from './movie-item'

interface Props {
    movies:IMovie[];
    onSearch:(title:string)=>void;
}

export default function SearchForm({movies, onSearch}:Props) {
    const [text, setText] = useState('');
    
    const onFind = (e) => {
        e.preventDefault();
        onSearch(text.toLowerCase());
    }
  
   return (
    <form onSubmit={onFind} className='w-xs flex gap-2'>
        <input type="text" className='w-full bg-transparent border-2 border-gray-500 rounded-md p-1' placeholder='Find movie' value={text} onChange={(e) => setText(e.target.value)} />
        <input type="submit" value="Find" className='w-20 p-1 rounded-md bg-red-700 border-2 border-red-700 border-solid transition-all hover:bg-transparent hover:text-red-700' />
        <datalist>
            {
                movies.map((movie:IMovie) => {
                    return <option key={movie.id} value={movie.title}>{movie.title}</option>
                }) 
            }
        </datalist>
    </form>
  )
}