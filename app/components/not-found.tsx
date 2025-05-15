import React from 'react'

export default function NotFound() {
  return (
    <div className='w-full h-[100vh] bg-black flex flex-col justify-center items-center gap-5'>
        <h4 className='text-7xl text-red-600'>404</h4>
        <p className='text-xl'>Page not found</p>
    </div>
  )
}