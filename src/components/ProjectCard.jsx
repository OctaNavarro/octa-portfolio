import React from 'react'
import Galery from './Galery'

export default function ProjectCard({
  imgs,
  name,
  description,
  deploy,
  github,
}) {
  return (
    <div className='md:ml-auto'>
      <div className='w-[350px] mx-12 card md:w-1/3 md:min-w-[500px] h-[550px] glass'>
        <figure  className='h-56'>
          <Galery imgs={imgs}/>
        </figure>
        <div className='card-body'>
          <h2 className='card-title justify-center'>{name}</h2>
          <p className='mb-1 text-lg'>{description}</p>
          <div className='card-actions justify-between'>
            <a
              href={deploy}
              target='_blank'
              rel='noreferrer'
              className='btn bg-gradient-to-r from-tangerine to-yellow border-none text-dblue'
            >
              Deployed
            </a>
            <a
              href={github}
              target='_blank'
              rel='noreferrer'
              className='btn bg-gradient-to-r from-tangerine to-yellow border-none text-dblue'
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
