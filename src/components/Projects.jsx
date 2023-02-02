import React from 'react'
import ProjectCard from './ProjectCard'
import { projectsData } from '../assets/Data'

export default function Projects() {
  return (
    <div
      name='projects'
      className='snap-start w-auto h-auto min-h-screen bg-gradient-to-b from-dblue to-blue text-white'
    >
      <div className='bg-orange w-full h-1' />

      <div className='ml-8 my-12 md:ml-72 text-6xl font-bold text-orange'>
        <h2>My projects</h2>
      </div>
      <div className='hidden md:grid md:grid-cols-2 gap-8 md:place-items-end  mt-24 md:ml-48  justify-center align-middle'>
        {projectsData.map(e => (
          <ProjectCard
            key={e.id}
            imgs={e.imgs}
            description={e.description}
            name={e.name}
            deploy={e.deploy}
            github={e.github}
          />
        ))}
      </div>
      <div className='md:hidden carousel h-[550px] w-[400px] rounded-box mx-auto snap-always'>
        {projectsData.map(e => (
          <div className='carousel-item'>
            <ProjectCard
              key={e.id}
              imgs={e.imgs}
              description={e.description}
              name={e.name}
              deploy={e.deploy}
              github={e.github}
              
            />
        </div>  
        ))}
      </div>
    </div>
  )
}
