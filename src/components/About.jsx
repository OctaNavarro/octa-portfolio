import React from 'react'
import AboutCard from './AboutCard'
import { cardsParams } from '../assets/Data'

export default function About() {
  return (
    <div
      name='about'
      className='snap-center w-auto h-auto bg-gradient-to-b from-dblue to-blue text-lbgray'
    >
      <div className='bg-orange w-full h-1' />
      <div className='max-w-screen-lg mx-8 md:ml-56 flex flex-col justify-center mt-16'>
        <p className='text-6xl font-bold inline text-orange'>About me</p>
        <br />
        <p className='text-xl'>
          At this point yoy already know I'm a web developer, however that is
          just a tiny tiny piece of the whole puzzle, because I'm a firm
          believer that we are not just our knowledge, but also all our previous
          experiences that shape each one of us. With that in mind, here are
          some facts about me.
        </p>
      </div>
      <div className='flex justify-around mt-16 flex-wrap'>
        {cardsParams.map(e => (
          <AboutCard
            img={e.img}
            alt={e.alt}
            title={e.title}
            steps={e.steps}
            key={e.id}
            id={e.steps.id}
          />
        ))}
      </div>
    </div>
  )
}
