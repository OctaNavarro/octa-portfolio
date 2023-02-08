import React from 'react'
import profile from '../assets/profile.jpeg'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import CV from '../assets/CV-Navarro-Octavio.pdf'

export default function Home() {
  return (
    <div className='snap-center h-screen w-full bg-gradient-to-b from-dblue to-blue text-lbgray'>
      <div className='bg-orange w-full h-1' />

      <div className='max-w-screen-lg mx-auto mt-10 xl:mt-48 flex flex-col items-center justify-center h-auto px-4 md:flex-row '>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-5xl font-bold'>
            Welcome to my place on the{' '}
            <span className='text-orange'>internet</span>!
          </h2>
          <p className='text-gray-500 py-4 max-w-md md:text-xl'>
            My name is Octavio, but you can call me Octa. I'm very passionate
            about technology and how it can have a great imapct on people's
            life, that's why I decided to become a Biomedical Engineer. After
            working 4 years as an engineer I made a plot twist and become a web
            developer, so I can reach even more people all arround the globe
          </p>

          <a
            href={CV}
            download={true}
            className='group w-fit text-dblue px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-tangerine to-yellow cursor-pointer active:translate-y-1 duration-300'
            target='_blank'
            rel='noreferrer'
          >
            Download CV <BsFillPersonLinesFill size={30} className='ml-4' />
          </a>
        </div>

        <div>
          <img
            src={profile}
            alt='my profile'
            className='mx-auto xl:ml-60 mb-10 w-1/2 md:w-2/3 sm:mt-10 mask mask-squircle'
          />
        </div>
      </div>
    </div>
  )
}
