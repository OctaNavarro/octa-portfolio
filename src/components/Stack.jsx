import React from 'react'
import { techs } from '../assets/Data'


export default function Stack() {
  

  return (
    <div
      name='stack'
      className='w-auto h-auto min-h-screen bg-gradient-to-b from-dblue to-blue text-blue'
    >
      <div className='snap-start bg-orange w-full h-1' />

      <div className='max-w-screen-xl'>
        <div>
        <div className='mx-12 md:ml-56 flex flex-col justify-center mt-12'>
          <p className='text-6xl font-bold text-orange'>
            Experience
          </p>
          <p className='py-4 text-xl text-lbgray'>These are the technologies I've worked with</p>
        </div>
        </div>
        <div className='grid grid-cols-3  sm:grid-cols-4 gap-4 sm:gap-8 text-center py-6 sm:mx-12 md:mx-40 w-[85vw] sm:w-[75vw]'>
          {techs.map(({ id, src, title, style }) => (
            <div
              
              key={id}
              className={`bg-lbgray shadow-lg hover:scale-105 duration-500 py-4 px-4 min-w-full sm:py-8 mx-10 rounded-lg sm:mx-12 ${style}`}
            >
              <img src={src} alt='' className='w-28 object-fit min-h-16 mx-auto' />
              <p className='mt-4'>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
