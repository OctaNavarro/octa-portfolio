import React from 'react'
import ProjectCard from './ProjectCard'
import { projectsData } from '../assets/Data'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

export default function Projects() {
  const settings = {
    dots: true,
    fade: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: dots => (
      <div
        style={{
          
          
         
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          
          width: "30px",
          color: '#EbEbEb',
          border: "1px #EbEbEb solid",
          borderRadius: "10px",
          
        }}
      >
        {i + 1}
      </div>
    )
    
  }

  return (
    <div
      name='projects'
      className='snap-start w-auto h-auto min-h-screen bg-gradient-to-b from-dblue to-blue text-white'
    >
      <div className='snap-start bg-orange w-full h-1' />

      <div className=' my-12 px-10 xl:ml-72 text-5xl font-bold text-orange'>
        <h2>My projects</h2>
      </div>

      <div className='hidden xl:grid xl:grid-cols-2 xl:gap-8 xl:place-items-end  mt-24 xl:ml-24  xl:justify-center xl:align-middle'>
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

      <div className='xl:hidden'>
        <Slider {...settings}>
          {projectsData.map(e => (
            <div key={e.id}>
              <ProjectCard
                imgs={e.imgs}
                description={e.description}
                name={e.name}
                deploy={e.deploy}
                github={e.github}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

{
}
