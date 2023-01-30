import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-scroll'
import profile from '../assets/profile.jpeg'

export default function Home() {
  return (
    <div
      name='home'
      className='h-screen w-full bg-gradient-to-b from-dblue to-blue text-lbgray'
    >
      <div className='bg-orange w-full h-1' />

      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:my-0 md:flex-row sm:mt-10'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-5xl font-bold'>
            Welcome to my place on the{' '}
            <span className='text-orange'>internet</span>!
          </h2>
          <p className='text-gray-500 py-4 max-w-md'>
            My name is Octavio, but you can call me Octa. I'm very passionate
            about technology and how it can have a great imapct on people's
            life, that's why I decided to become a Biomedical Engineer. After
            working 4 years as an engineer I decided to become a web developer,
            so I can reach people all arroun the globe.
          </p>

          <div>
            <Link
              to='portfolio'
              smooth
              duration={500}
              className='group w-fit text-dblue px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-tangerine to-yellow cursor-pointer'
            >
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={profile}
            alt='my profile'
            className='rounded-3xl mx-auto xl:ml-60 mb-10 w-1/2 md:w-2/3 sm:mt-10 border-orange border-2'
          />
        </div>
      </div>
    </div>
  )
}
