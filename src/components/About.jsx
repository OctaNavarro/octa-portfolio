import React from 'react'
import brain from '../assets/brain.png'
import time from '../assets/time.png'
import hobbies from '../assets/hobbies.png'
import AboutCard from './AboutCard'


export default function About() {
  
  const cardsParams=[
    {
      img: brain,
      alt: 'Image of a brain created with Midjourney',
      title: 'Knowdlege',
      steps: [{fact:'For the frontend my framework(library) of choice is React', id:1}, {fact:'For styling, I like using plain CSS, Tailwind or Bootstrap', id:2},{fact:'For the backend I chose NodeJS with Express', id:3}, {fact:'For my relaional databases I like PostreSQL and for non relational MongoDB', id:4}],
      id: 1
    },
    {
      img: time,
      alt: 'Image of an hourglass and a notebook created with Midjourney',
      title: 'The future',
      steps: [{fact:'I´ll be focusing more on the frontend and how to design better UI', id:1}, {fact:'I´ll master typescript, and learn NextJS 13', id:2},{fact:'Just for fun I´ll be learning Python, It will become handly eventually', id:3}, {fact:'I´m willing to relocate if that is required by the empoyer', id:4}],
      id: 2
    },
    {
      img: hobbies,
      alt: 'Image of a brain created with Midjourney',
      title: 'Hobbies',
      steps: [{fact:'I climb mountains to conquer fear, and play futbol to make friends', id:1}, {fact:'I love playing music, because that´s where I can find myself', id:2},{fact:'Traveling is the way I want to know other cultures and become a better person', id:3}, {fact:'I enjoy using AI to create things, like the images used in the headers of these cards', id:4}],
      id: 3
    }
  ]
  
  return (
    <div
      name='about'
      className='w-auto h-auto bg-gradient-to-b from-dblue to-blue text-lbgray'
    >
      <div className='bg-orange w-full h-1' />
      <div className='max-w-screen-lg mx-8 md:mx-48 flex flex-col justify-center mt-16'>
        <p className='text-4xl font-bold inline'>About me</p>
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
          <AboutCard img={e.img} alt={e.alt} title={e.title} steps={e.steps} key={e.id} id={e.steps.id}/>
        ))}
      </div>
    </div>
  )
}
