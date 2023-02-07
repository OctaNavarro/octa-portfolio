import React from 'react'
import JS from '../assets/logos/JS.svg'
import HTML from '../assets/logos/HTM.svg'
import CSS from '../assets/logos/CSS.svg'
import Bootstrap from '../assets/logos/Bootstrap.svg'
import Express from '../assets/logos/Express.svg'
import Git from '../assets/logos/Git.svg'
import Mongo from '../assets/logos/Mongo1.svg'
import Node from '../assets/logos/Node.svg'
import Postgresql from '../assets/logos/Postgresql.svg'
import ReactLogo from '../assets/logos/React.svg'
import Tailwind from '../assets/logos/Tailwind.svg'
import TS from '../assets/logos/TS.svg'
import stack from '../assets/logos/HTML-CSS-JS.png'
import IoT from '../assets/logos/IoT.svg'


export default function Stack() {
  const techs = [
    {
      id: 1,
      src: ReactLogo,
      title: 'React',
      style: 'shadow-orange',
    },
    {
      id: 2,
      src: stack,
      title: 'HTML CSS JS',
      style: 'shadow-lblue',
    },
    {
      id: 3,
      src: Node,
      title: 'Node JS',
      style: 'shadow-lbgray',
    },
    {
      id: 4,
      src: TS,
      title: 'TypeScript',
      style: 'shadow-lblue',
    },
    {
      id: 5,
      src: Tailwind,
      title: 'Tailwind',
      style: 'shadow-orange',
    },
    {
      id: 6,
      src: Bootstrap,
      title: 'Bootstrap',
      style: 'shadow-orange',
    },
    {
      id: 7,
      src: Express,
      title: 'Express',
      style: 'shadow-lbgray',
    },
    {
      id: 8,
      src: Git,
      title: 'Git',
      style: 'shadow-lblue',
    },
    {
      id: 9,
      src: Mongo,
      title: 'Mongo DB',
      style: 'shadow-lbgray',
    },
    {
      id: 10,
      src: IoT,
      title: 'Internet of Tings',
      style: 'shadow-lblue',
    },
    {
      id: 11,
      src: Postgresql,
      title: 'PostgreSQL',
      style: 'shadow-lbgray',
    },
    {
      id: 12,
      src: Tailwind,
      title: 'Tailwind',
      style: 'shadow-orange',
    },

  ]

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
        <div className='grid grid-cols-3  sm:grid-cols-4 gap-4 sm:gap-8 text-center py-6 sm:mx-24 w-[85vw] sm:w-[75vw]'>
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
